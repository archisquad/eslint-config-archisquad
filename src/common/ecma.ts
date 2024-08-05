import js from "@eslint/js"

import { FactoryConfig } from "../types"

export const ecmaConfig: FactoryConfig = () => ({
  name: "common/ecma",
  ...js.configs.recommended,
})
