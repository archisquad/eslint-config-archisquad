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
  type?: Record<string, string | string[]>
  value?: Record<string, string | string[]>
}

type PerfectionistIntersectionAndUnionTypesGroup =
  | "conditional"
  | "function"
  | "import"
  | "intersection"
  | "keyword"
  | "literal"
  | "nullish"
  | "object"
  | "operator"
  | "tuple"
  | "union"
  | "unknown"

export type PerfectionistConfig = {
  ignoreCase: boolean
  importSort: {
    customGroups: PerfectionistCustomGroup
    groups: PerfectionistGroup
    internalPattern: string[]
    newlinesBetween: "always" | "ignore" | "never"
  }
  interfaceSort: {
    customGroups: PerfectionistCustomGroup
    groups: PerfectionistGroup
    ignorePattern: string[]
    partitionByNewLine: boolean
  }
  intersectionAndUnionTypesSort: {
    groups: (
      | PerfectionistIntersectionAndUnionTypesGroup
      | PerfectionistIntersectionAndUnionTypesGroup[]
    )[]
  }
  objectSort: {
    customGroups: PerfectionistCustomGroup
    groups: PerfectionistGroup
    partitionByNewLine: boolean
  }
  objectTypesSort: {
    partitionByNewLine: boolean
  }
  order: "asc" | "desc"
  sortType: "alphabetical" | "line-length" | "natural"
}

export type Config = PartialDeep<{
  features: {
    compat: Flag
    promise: Flag
    secrets: Flag
  }
  frameworks: {
    node: FlagOrConfig<NodeConfig>
    playwright: PlaywrightConfig
    vitest: VitestConfigInput
  }
  language: {
    json: FlagOrConfig<JsonConfigInput>
    markdown: FlagOrConfig<MarkdownConfig>
    typescript: FlagOrConfig<TypescriptConfig>
    yaml: FlagOrConfig<YamlConfigInput>
  }
  options: {
    perfectionist: PerfectionistConfig
  }
  prettier: Flag
}>
