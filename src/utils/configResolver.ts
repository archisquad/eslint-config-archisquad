import defu from "defu"

import {
  Config,
  FlagOrConfig,
  JsonConfig,
  PerfectionistConfig,
  VitestConfig,
  YamlConfig,
} from "../types"
import {
  jsonDefaultConfig,
  perfectionistDefaultConfig,
  yamlDefaultConfig,
} from "./defaultConfigs"

export function configResolver<TConfig>(
  value: FlagOrConfig<NoInfer<TConfig>>,
  defaultConfig: TConfig
): TConfig {
  return typeof value === "boolean" ? defaultConfig : (value as TConfig)
}

export function jsonConfigResolver(config: Config): JsonConfig {
  if (config?.language?.json === true) {
    return {
      ...jsonDefaultConfig,
      prettier: config?.prettier ?? jsonDefaultConfig.prettier,
    }
  }

  return {
    files: (config?.language?.json as JsonConfig).files,
    prettier: config?.prettier ?? false,
  }
}

export function perfectionistConfigResolver(
  config: Config
): PerfectionistConfig {
  const inputConfig = config?.options?.perfectionist ?? {}

  return defu(perfectionistDefaultConfig, inputConfig)
}

export function vitestConfigResolver(config: Config): VitestConfig {
  return {
    files: config?.frameworks?.vitest?.files ?? [],
    typescript: config?.language?.typescript == true,
  }
}

export function yamlConfigResolver(config: Config): YamlConfig {
  if (config?.language?.yaml === true) {
    return {
      ...yamlDefaultConfig,
      prettier: config?.prettier ?? false,
    }
  }

  return {
    files: (config?.language?.yaml as YamlConfig).files,
    prettier: config?.prettier ?? false,
  }
}
