import type { Linter } from "eslint"

type Flag = boolean
export type FlagOrConfig<TConfig> = Flag | TConfig

type FactoryConfigArgs<T> = T extends undefined ? [] : [config: T]
export type FactoryConfig<T = undefined> = (
  ...args: FactoryConfigArgs<T>
) => Linter.FlatConfig

export type NodeConfig = {
  files: string[]
}

export type TypescriptConfig = {
  files: string[]
}

export type MarkdownConfig = {
  files: string[]
}

export type YamlConfig = {
  files: string[]
  prettier: boolean
}

export type YamlConfigInput = Omit<YamlConfig, "prettier">

export type JsonConfig = {
  files: string[]
  prettier: boolean
}

export type JsonConfigInput = Omit<JsonConfig, "prettier">

export type PlaywrightConfig = {
  files: string[]
}

export type VitestConfig = {
  files: string[]
  typescript: boolean
}

export type VitestConfigInput = Omit<VitestConfig, "typescript">

export type Config = {
  features: {
    promise: Flag
    secrets: Flag
    compat: Flag
  }
  language: {
    typescript: FlagOrConfig<TypescriptConfig>
    yaml: FlagOrConfig<YamlConfigInput>
    json: FlagOrConfig<JsonConfigInput>
    markdown: FlagOrConfig<MarkdownConfig>
  }
  prettier: Flag
  frameworks: {
    node: FlagOrConfig<NodeConfig>
    vitest: VitestConfigInput
    playwright: PlaywrightConfig
  }
}
