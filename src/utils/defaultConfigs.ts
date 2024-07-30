import type {
  JsonConfig,
  NodeConfig,
  PerfectionistConfig,
  TypescriptConfig,
  YamlConfig,
} from "../types"
import {
  JSON_FILES,
  JS_FILES,
  MD_FILES,
  TS_FILES,
  YAML_FILES,
} from "./constants"

export const nodeDefaultConfig: NodeConfig = {
  files: JS_FILES,
}

export const typescriptDefaultConfig: TypescriptConfig = {
  files: TS_FILES,
}

export const markdownDefaultConfig: TypescriptConfig = {
  files: MD_FILES,
}

export const yamlDefaultConfig: YamlConfig = {
  files: YAML_FILES,
  prettier: false,
}

export const jsonDefaultConfig: JsonConfig = {
  files: JSON_FILES,
  prettier: false,
}

export const perfectionistDefaultConfig: PerfectionistConfig = {
  order: "asc",
  ignoreCase: true,
  sortType: "alphabetical",
  importSort: {
    internalPattern: ["@/**"],
    newlinesBetween: "always",
    groups: [
      ["builtin", "external"],
      "type",
      "internal-type",
      "internal",
      ["parent-type", "sibling-type", "index-type"],
      ["parent", "sibling", "index"],
      ["object", "unknown"],
    ],
    customGroups: {},
  },
  interfaceSort: {
    ignorePattern: [],
    partitionByNewLine: true,
    groups: [],
    customGroups: {},
  },
  objectTypesSort: {
    partitionByNewLine: true,
  },
  objectSort: {
    partitionByNewLine: true,
    groups: [],
    customGroups: {},
  },
  intersectionAndUnionTypesSort: {
    groups: [
      "conditional",
      "intersection",
      "union",
      "operator",
      ["literal", "tuple"],
      ["function", "object"],
      ["import", "keyword", "nullish"],
      "unknown",
    ],
  },
}
