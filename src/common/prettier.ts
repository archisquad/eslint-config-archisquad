import { FactoryConfig } from "../types"
import { Linter } from "eslint"
import officialPrettierConfig from "eslint-plugin-prettier/recommended"

export const prettierConfig: FactoryConfig = () => ({
  name: "common/prettier",
  ...(officialPrettierConfig as Linter.FlatConfig),
})
