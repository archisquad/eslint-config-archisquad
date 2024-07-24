import type { FactoryConfig, TypescriptConfig } from "../types";
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';


export const typescriptConfig: FactoryConfig<TypescriptConfig> = (config) => ({
  name: "languages/typescript",
  files: config.files,
  languageOptions: {
    parser: parserTs,
  },
  plugins: {
    "@typescript-eslint": pluginTs as any,
  },
  rules: {
    ...pluginTs.configs.recommended.rules,
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "prefer-destructuring": "off",
    "@typescript-eslint/prefer-destructuring": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-namespace": "off",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "prefer-promise-reject-errors": "off",
    "@typescript-eslint/prefer-promise-reject-errors": "error",
  },
})
