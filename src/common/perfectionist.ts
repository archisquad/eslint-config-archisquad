import type { FactoryConfig, PerfectionistConfig } from "../types"
import type { ESLint } from "eslint"
import perfectionistPlugin from "eslint-plugin-perfectionist"

export const perfectionistConfig: FactoryConfig<PerfectionistConfig> = (
  config
) => ({
  name: "common/perfectionist",
  plugins: {
    perfectionist: perfectionistPlugin as unknown as ESLint.Plugin,
  },
  rules: {
    "perfectionist/sort-array-includes": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        groupKind: "spreads-first",
      },
    ],
    "perfectionist/sort-classes": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        partitionByComment: false,
        groups: [
          "index-signature",
          "static-property",
          "private-property",
          "property",
          ["get-method", "set-method"],
          "constructor",
          "static-method",
          "private-method",
          "method",
          "unknown",
        ],
      },
    ],
    "perfectionist/sort-enums": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        partitionByComment: true,
      },
    ],
    "perfectionist/sort-exports": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        internalPattern: config.importSort.internalPattern,
        newlinesBetween: config.importSort.newlinesBetween,
        groups: config.importSort.groups,
        customGroups: config.importSort.customGroups,
        environment: "node",
      },
    ],
    "perfectionist/sort-interfaces": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        ignorePattern: config.interfaceSort.ignorePattern,
        partitionByNewLine: config.interfaceSort.partitionByNewLine,
        groupKind: "required-first",
        groups: config.interfaceSort.groups,
        customGroups: config.interfaceSort.customGroups,
      },
    ],
    "perfectionist/sort-object-types": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        partitionByNewLine: config.objectTypesSort.partitionByNewLine,
      },
    ],
    "perfectionist/sort-intersection-types": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        groups: config.intersectionAndUnionTypesSort.groups,
      },
    ],
    "perfectionist/sort-union-types": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        groups: config.intersectionAndUnionTypesSort.groups,
      },
    ],
    "perfectionist/sort-maps": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
      },
    ],
    "perfectionist/sort-named-exports": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        groupKind: "types-first",
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
        partitionByComment: false,
        partitionByNewLine: config.objectSort.partitionByNewLine,
        styledComponents: false,
        groups: config.objectSort.groups,
        customGroups: config.objectSort.customGroups,
      },
    ],
    "perfectionist/sort-switch-case": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
      },
    ],
    "perfectionist/sort-variable-declarations": [
      "error",
      {
        type: config.sortType,
        order: config.order,
        ignoreCase: config.ignoreCase,
      },
    ],
  },
})
