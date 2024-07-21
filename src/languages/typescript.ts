import type { FactoryConfig, TypescriptConfig } from "../types";
import parserTs from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'

export const typescriptConfig: FactoryConfig<TypescriptConfig> = (config) => ({
  name: 'languages/typescript',
  files: config.files,
  languageOptions: {
    parser: parserTs,
  },
  plugins: {
    '@typescript-eslint': pluginTs as any,
  },
  rules: {
    ...pluginTs.configs.recommended.rules,
  }
})
