import { FactoryConfig } from "../types"
import officialPrettierConfig from "eslint-plugin-prettier/recommended"

export const prettierConfig: FactoryConfig = () => ({
  name: "common/prettier",
  ...officialPrettierConfig,
})
