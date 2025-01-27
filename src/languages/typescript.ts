import pluginTs from "@typescript-eslint/eslint-plugin"
import parserTs from "@typescript-eslint/parser"

import type { FactoryConfig, TypescriptConfig } from "../types"

export const typescriptConfig: FactoryConfig<TypescriptConfig> = (config) => ({
  files: config.files,
  languageOptions: {
    parser: parserTs,
  },
  name: "languages/typescript",
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "@typescript-eslint": pluginTs as any,
  },
  rules: {
    ...pluginTs.configs.recommended.rules,
    // For perfectionist:
    // https://perfectionist.dev/rules/sort-object-types
    // https://perfectionist.dev/rules/sort-interfaces
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-magic-numbers": "warn",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/prefer-function-type": "error",
    // For perfectionist:
    // https://perfectionist.dev/rules/sort-union-types
    // https://perfectionist.dev/rules/sort-intersection-types
    "@typescript-eslint/sort-type-constituents": "off",
    "default-param-last": "off",
    "no-magic-numbers": "off",
    "no-use-before-define": "off",
    "prefer-promise-reject-errors": "off",
  },
})
