import type { FactoryConfig, YamlConfig } from "../types";
import ymlPlugin from "eslint-plugin-yml";
import ymlParser from "yaml-eslint-parser";

export const yamlConfig: FactoryConfig<YamlConfig> = (config) => {

  const formattingRules = config.prettier
    ? {
        "yml/block-mapping-question-indicator-newline": "error",
        "yml/block-sequence-hyphen-indicator-newline": "error",
        "yml/flow-mapping-curly-newline": "error",
        "yml/flow-mapping-curly-spacing": "error",
        "yml/flow-sequence-bracket-newline": "error",
        "yml/flow-sequence-bracket-spacing": "error",
        "yml/indent": "error",
        "yml/key-spacing": "error",
        "yml/quotes": "error",
      } as const
    : {
        "yml/block-mapping-colon-indicator-newline": "off",
        "yml/block-mapping-question-indicator-newline": "off",
        "yml/block-sequence-hyphen-indicator-newline": "off",
        "yml/flow-mapping-curly-newline": "off",
        "yml/flow-mapping-curly-spacing": "off",
        "yml/flow-sequence-bracket-newline": "off",
        "yml/flow-sequence-bracket-spacing": "off",
        "yml/indent": "off",
        "yml/key-spacing": "off",
        "yml/no-multiple-empty-lines": "off",
        "yml/no-trailing-zeros": "off",
        "yml/quotes": "off",
      } as const

  return {
    files: config.files,
    plugins: {
      yml: ymlPlugin as any,
    },
    languageOptions: {
      parser: ymlParser,
    },
    rules: {
      // base rules
      "no-irregular-whitespace": "off",
      "no-unused-vars": "off",
      "spaced-comment": "off",
      // recommended rules
      "yml/no-empty-document": "error",
      "yml/no-empty-key": "error",
      "yml/no-empty-mapping-value": "error",
      "yml/no-empty-sequence-entry": "error",
      "yml/no-irregular-whitespace": "error",
      "yml/no-tab-indent": "error",
      "yml/vue-custom-block/no-parsing-error": "error",
      // standard rules
      "yml/block-mapping": "error",
      "yml/block-sequence": "error",
      "yml/plain-scalar": "error",
      "yml/spaced-comment": "error",
      ...formattingRules,
    }
  }
}
