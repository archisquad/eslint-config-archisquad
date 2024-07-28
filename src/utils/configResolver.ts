import { Config, FlagOrConfig, JsonConfig, VitestConfig, YamlConfig, YamlConfigInput } from "../types";
import { jsonDefaultConfig, yamlDefaultConfig } from "./defaultConfigs";

export function configResolver<TConfig>(value: FlagOrConfig<TConfig>, defaultConfig: TConfig) {
  return typeof value === 'boolean' ? defaultConfig : value
}

export function yamlConfigResolver(config: Config): YamlConfig {
  if (config.language.yaml === true) {
    return {
      ...yamlDefaultConfig,
      prettier: config?.prettier ?? false,
    }
  }

  return {
    files: (config.language.yaml as YamlConfig).files,
    prettier: config?.prettier ?? false,
  }
}

export function jsonConfigResolver(config: Config): JsonConfig {
  if (config.language.json === true) {
    return {
      ...jsonDefaultConfig,
      prettier: config?.prettier ?? jsonDefaultConfig.prettier,
    }
  }

  return {
    files: (config.language.json as JsonConfig).files,
    prettier: config?.prettier ?? false,
  }
}

export function vitestConfigResolver(config: Config): VitestConfig {
  return {
    files: config.frameworks.vitest?.files,
    typescript: config.language.typescript == true,
  }
}
