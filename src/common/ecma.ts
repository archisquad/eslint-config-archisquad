import { FactoryConfig } from "../types"
import js from "@eslint/js"

export const ecmaConfig: FactoryConfig = () => ({
  name: "common/ecma",
  ...js.configs.recommended,
})
