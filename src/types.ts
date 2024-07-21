import type { Linter } from "eslint";

type Flag = boolean
type Paths = string | string[]
type FlagOrPaths = Flag | Paths
export type FlagOrConfig<TConfig> = Flag | TConfig

type FactoryConfigArgs<T> = T extends undefined ? [] : [config: T]
export type FactoryConfig<T = undefined> = (...args: FactoryConfigArgs<T>) => Linter.FlatConfig

export type NodeConfig = {
  files: string[];
}

export type TypescriptConfig = {
  files: string[];
}

export type Config = {
  features: {
    promise: Flag
    secrets: FlagOrPaths
    compat: Flag
  }
  language: {
    typescript: FlagOrConfig<TypescriptConfig>
    yaml: Flag
    json: FlagOrPaths
    html: FlagOrPaths
    markdown: FlagOrPaths
  }
  prettier: FlagOrPaths
  frameworks: {
    node: FlagOrConfig<NodeConfig>
    vue: FlagOrPaths
    vitest: Paths
    playwright: Paths
  }
}
