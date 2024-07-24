import { ecmaConfig } from "./common/ecma";
import { unicornConfig } from "./common/unicorn";
import type { Config } from "./types";
import { configResolver, jsonConfigResolver, yamlConfigResolver } from "./utils/configResolver";
import { markdownDefaultConfig, nodeDefaultConfig, typescriptDefaultConfig } from "./utils/defaultConfigs";
import gitignore from "eslint-config-flat-gitignore";
import { composer } from "eslint-flat-config-utils";


export function configFactory(config: Config) {
  const composition = composer()

  composition.append(gitignore(), ecmaConfig(), unicornConfig())

  if (config?.prettier) {
    composition.append(
      import("./common/prettier").then((module) => module.prettierConfig())
    )
  }

  if (config?.features?.promise) {
    composition.append(
      import("./features/promise").then((module) => module.promiseConfig())
    )
  }

  if (config?.features?.secrets) {
    composition.append(
      import("./features/secrets").then((module) => module.secretsConfig())
    )
  }

  if (config?.features?.compat) {
    composition.append(
      import("./features/compat").then((module) => module.compatConfig())
    )
  }

  if (config?.language?.typescript) {
    composition.append(
      import("./languages/typescript").then((module) =>
        module.typescriptConfig(
          configResolver(config.language.typescript, typescriptDefaultConfig)
        )
      )
    )
  }

  if (config?.language?.markdown) {
    composition.append(
      import("./languages/markdown").then((module) =>
        module.markdownConfig(
          configResolver(config.language.markdown, markdownDefaultConfig)
        )
      )
    )
  }

  if (config?.language?.yaml) {
    composition.append(
      import("./languages/yaml").then((module) =>
        module.yamlConfig(yamlConfigResolver(config))
      )
    )
  }

  if (config?.language?.json) {
    composition.append(
      import("./languages/json").then((module) =>
        module.jsonConfig(jsonConfigResolver(config))
      )
    )
  }

  if (config?.frameworks?.node) {
    composition.append(
      import("./frameworks/node").then((module) =>
        module.nodeConfig(
          configResolver(config.frameworks.node, nodeDefaultConfig)
        )
      )
    )
  }

  return composition
}
