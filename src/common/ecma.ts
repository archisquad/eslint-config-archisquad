import js from "@eslint/js"
import globals from "globals"

import { FactoryConfig } from "../types"

export const ecmaConfig: FactoryConfig = () => ({
  name: "common/ecma",
  ...js.configs.recommended,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2024,
    },
  },
  rules: {
    // For perfectionist, https://perfectionist.dev/rules/sort-named-imports
    "sort-imports": "off",
    // For perfectionist, https://perfectionist.dev/rules/sort-objects
    "sort-keys": "off",
  },
})
