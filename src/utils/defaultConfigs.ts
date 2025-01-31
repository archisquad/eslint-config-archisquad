import type {
  JsonConfig,
  NodeConfig,
  PerfectionistConfig,
  TypescriptConfig,
  YamlConfig,
} from "../types"

import {
  JS_FILES,
  JSON_FILES,
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
    internalPattern: ["^@/.*"],
    newlinesBetween: "always",
    tsconfigRootDir: undefined,
  },
  interfaceSort: {
    customGroups: {},
    groups: [
      "required-property",
      "multiline-property",
      "optional-property",
      "member",
      "index-signature",
      "method",
    ],
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
  modulesSort: {
    groups: [
      "declare-enum",
      "export-enum",
      "enum",
      ["declare-interface", "declare-type"],
      ["export-interface", "export-type"],
      ["interface", "type"],
      "declare-class",
      "export-class",
      "class",
      "declare-function",
      "export-function",
      "function",
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
