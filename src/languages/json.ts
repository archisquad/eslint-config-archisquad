import type { FactoryConfig, JsonConfig } from '../types';
import jsonPlugin from "eslint-plugin-jsonc";
import jsonParser from 'jsonc-eslint-parser';

export const jsonConfig: FactoryConfig<JsonConfig> = (config) => {
  const formattingRules = config.prettier
    ? {
        "jsonc/array-bracket-newline": "off",
        "jsonc/array-bracket-spacing": "off",
        "jsonc/array-element-newline": "off",
        "jsonc/comma-dangle": "off",
        "jsonc/comma-style": "off",
        "jsonc/indent": "off",
        "jsonc/key-spacing": "off",
        "jsonc/no-floating-decimal": "off",
        "jsonc/object-curly-newline": "off",
        "jsonc/object-curly-spacing": "off",
        "jsonc/object-property-newline": "off",
        "jsonc/quote-props": "off",
        "jsonc/quotes": "off",
        "jsonc/space-unary-ops": "off",
      } as const
    : {
        "jsonc/comma-dangle": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/quote-props": "error",
        "jsonc/quotes": "error",
        "jsonc/space-unary-ops": "error",
      } as const

  return {
    files: config.files,
    plugin: {
      'jsonc': jsonPlugin,
    },
    languageOptions: {
      parser: jsonParser,
    },
    rules: {
      strict: "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "jsonc/no-bigint-literals": "error",
      "jsonc/no-binary-expression": "error",
      "jsonc/no-binary-numeric-literals": "error",
      "jsonc/no-comments": "error",
      "jsonc/no-dupe-keys": "error",
      "jsonc/no-escape-sequence-in-identifier": "error",
      "jsonc/no-hexadecimal-numeric-literals": "error",
      "jsonc/no-infinity": "error",
      "jsonc/no-multi-str": "error",
      "jsonc/no-nan": "error",
      "jsonc/no-number-props": "error",
      "jsonc/no-numeric-separators": "error",
      "jsonc/no-octal-numeric-literals": "error",
      "jsonc/no-octal": "error",
      "jsonc/no-parenthesized": "error",
      "jsonc/no-plus-sign": "error",
      "jsonc/no-regexp-literals": "error",
      "jsonc/no-sparse-arrays": "error",
      "jsonc/no-template-literals": "error",
      "jsonc/no-undefined-value": "error",
      "jsonc/no-unicode-codepoint-escapes": "error",
      "jsonc/no-useless-escape": "error",
      "jsonc/valid-json-number": "error",
      "jsonc/vue-custom-block/no-parsing-error": "error",
      ...formattingRules,
    }
  }
}
