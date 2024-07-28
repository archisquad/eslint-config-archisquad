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
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-namespace": "off",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "prefer-promise-reject-errors": "off",
  },
})
