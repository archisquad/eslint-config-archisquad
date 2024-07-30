import { ecmaConfig } from "./common/ecma"
import { perfectionistConfig } from "./common/perfectionist"
import { unicornConfig } from "./common/unicorn"
import type { Config } from "./types"
import {
  configResolver,
  jsonConfigResolver,
  perfectionistConfigResolver,
  vitestConfigResolver,
  yamlConfigResolver,
} from "./utils/configResolver"
import {
  markdownDefaultConfig,
  nodeDefaultConfig,
  typescriptDefaultConfig,
} from "./utils/defaultConfigs"
import gitignore from "eslint-config-flat-gitignore"
import { composer } from "eslint-flat-config-utils"

export async function configFactory(
  config: Config = {}
): Promise<ReturnType<typeof composer>> {
  const composition = composer()

  composition.append(
    gitignore(),
    ecmaConfig(),
    unicornConfig(),
    perfectionistConfig(perfectionistConfigResolver(config))
  )

  if (config?.prettier) {
    const { prettierConfig } = await import("./common/prettier")
    composition.append(prettierConfig())
  }

  if (config?.features?.promise) {
    const { promiseConfig } = await import("./features/promise")
    composition.append(promiseConfig())
  }

  if (config?.features?.secrets) {
    const { secretsConfig } = await import("./features/secrets")
    composition.append(secretsConfig())
  }

  if (config?.features?.compat) {
    const { compatConfig } = await import("./features/compat")
    composition.append(compatConfig())
  }

  if (config?.language?.typescript) {
    const { typescriptConfig } = await import("./languages/typescript")
    composition.append(
      typescriptConfig(
        configResolver(config.language.typescript, typescriptDefaultConfig)
      )
    )
  }

  if (config?.language?.markdown) {
    const { markdownConfig } = await import("./languages/markdown")
    composition.append(
      markdownConfig(
        configResolver(config.language.markdown, markdownDefaultConfig)
      )
    )
  }

  if (config?.language?.yaml) {
    const { yamlConfig } = await import("./languages/yaml")
    composition.append(yamlConfig(yamlConfigResolver(config)))
  }

  if (config?.language?.json) {
    const { jsonConfig } = await import("./languages/json")
    composition.append(jsonConfig(jsonConfigResolver(config)))
  }

  if (config?.frameworks?.node) {
    const { nodeConfig } = await import("./frameworks/node")
    composition.append(
      nodeConfig(configResolver(config.frameworks.node, nodeDefaultConfig))
    )
  }

  if (config?.frameworks?.playwright) {
    const { playwrightConfig } = await import("./frameworks/playwright")
    composition.append(playwrightConfig(config?.frameworks?.playwright))
  }

  if (config?.frameworks?.vitest) {
    const { vitestConfig } = await import("./frameworks/vitest")
    composition.append(vitestConfig(vitestConfigResolver(config)))
  }

  return composition
}
