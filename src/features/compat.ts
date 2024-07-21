import pluginCompat from "eslint-plugin-compat";
import type { FactoryConfig } from "../types";

export const compatConfig: FactoryConfig = () => ({
  name: 'features/compat',
  plugins: {
    noSecrets: pluginCompat,
  },
  ...pluginCompat.configs["flat/recommended"],
})
