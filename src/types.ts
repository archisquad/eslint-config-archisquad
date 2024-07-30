import type { Linter } from "eslint"
import type { PartialDeep } from "type-fest"

type Flag = boolean
export type FlagOrConfig<TConfig> = Flag | PartialDeep<TConfig>

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

type PerfectionistGroup = (string | string[])[]
type PerfectionistCustomGroup = {
  value?: Record<string, string | string[]>
  type?: Record<string, string | string[]>
}

type PerfectionistIntersectionAndUnionTypesGroup =
  | "conditional"
  | "intersection"
  | "union"
  | "operator"
  | "literal"
  | "tuple"
  | "function"
  | "object"
  | "import"
  | "keyword"
  | "nullish"
  | "unknown"

export type PerfectionistConfig = {
  order: "asc" | "desc"
  ignoreCase: boolean
  sortType: "alphabetical" | "line-length" | "natural"
  importSort: {
    internalPattern: string[]
    newlinesBetween: "ignore" | "always" | "never"
    customGroups: PerfectionistCustomGroup
    groups: PerfectionistGroup
  }
  interfaceSort: {
    ignorePattern: string[]
    partitionByNewLine: boolean
    groups: PerfectionistGroup
    customGroups: PerfectionistCustomGroup
  }
  objectTypesSort: {
    partitionByNewLine: boolean
  }
  objectSort: {
    partitionByNewLine: boolean
    groups: PerfectionistGroup
    customGroups: PerfectionistCustomGroup
  }
  intersectionAndUnionTypesSort: {
    groups: (
      | PerfectionistIntersectionAndUnionTypesGroup
      | PerfectionistIntersectionAndUnionTypesGroup[]
    )[]
  }
}

export type Config = PartialDeep<{
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
  options: {
    perfectionist: PerfectionistConfig
  }
}>
