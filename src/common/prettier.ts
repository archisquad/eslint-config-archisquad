import { Linter } from "eslint"
import officialPrettierConfig from "eslint-plugin-prettier/recommended"

import { FactoryConfig } from "../types"

export const prettierConfig: FactoryConfig = () => ({
  name: "common/prettier",
  ...(officialPrettierConfig as Linter.FlatConfig),
})
