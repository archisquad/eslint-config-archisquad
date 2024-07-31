import perfectionistPlugin from "eslint-plugin-perfectionist"

import type { ESLint } from "eslint"

import type { FactoryConfig, PerfectionistConfig } from "../types"

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
        groupKind: "spreads-first",
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-classes": [
      "error",
      {
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
        ignoreCase: config.ignoreCase,
        order: config.order,
        partitionByComment: false,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-enums": [
      "error",
      {
        ignoreCase: config.ignoreCase,
        order: config.order,
        partitionByComment: true,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-exports": [
      "error",
      {
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        customGroups: config.importSort.customGroups,
        environment: "node",
        groups: config.importSort.groups,
        ignoreCase: config.ignoreCase,
        internalPattern: config.importSort.internalPattern,
        newlinesBetween: config.importSort.newlinesBetween,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-interfaces": [
      "error",
      {
        customGroups: config.interfaceSort.customGroups,
        groupKind: "required-first",
        groups: config.interfaceSort.groups,
        ignoreCase: config.ignoreCase,
        ignorePattern: config.interfaceSort.ignorePattern,
        order: config.order,
        partitionByNewLine: config.interfaceSort.partitionByNewLine,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-intersection-types": [
      "error",
      {
        groups: config.intersectionAndUnionTypesSort.groups,
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-maps": [
      "error",
      {
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-named-exports": [
      "error",
      {
        groupKind: "types-first",
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-object-types": [
      "error",
      {
        ignoreCase: config.ignoreCase,
        order: config.order,
        partitionByNewLine: config.objectTypesSort.partitionByNewLine,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        customGroups: config.objectSort.customGroups,
        groups: config.objectSort.groups,
        ignoreCase: config.ignoreCase,
        order: config.order,
        partitionByComment: false,
        partitionByNewLine: config.objectSort.partitionByNewLine,
        styledComponents: false,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-switch-case": [
      "error",
      {
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-union-types": [
      "error",
      {
        groups: config.intersectionAndUnionTypesSort.groups,
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
    "perfectionist/sort-variable-declarations": [
      "error",
      {
        ignoreCase: config.ignoreCase,
        order: config.order,
        type: config.sortType,
      },
    ],
  },
})
