import type { FactoryConfig } from "../types"
import pluginCompat from "eslint-plugin-compat"

export const compatConfig: FactoryConfig = () => ({
  name: "features/compat",
  plugins: {
    noSecrets: pluginCompat,
  },
  ...pluginCompat.configs["flat/recommended"],
})
