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
  ignoreCase: true,
  importSort: {
    customGroups: {},
    groups: [
      ["builtin", "external"],
      "type",
      "internal-type",
      "internal",
      ["parent-type", "sibling-type", "index-type"],
      ["parent", "sibling", "index"],
      ["object", "unknown"],
    ],
    internalPattern: ["@/**"],
    newlinesBetween: "always",
  },
  interfaceSort: {
    customGroups: {},
    groups: [],
    ignorePattern: [],
    partitionByNewLine: true,
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
  objectSort: {
    customGroups: {},
    groups: [],
    partitionByNewLine: true,
  },
  objectTypesSort: {
    partitionByNewLine: true,
  },
  order: "asc",
  sortType: "alphabetical",
}
