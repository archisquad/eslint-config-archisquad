// @ts-expect-error -- promise plugin is not typed
import type { FactoryConfig } from "../types"
import pluginPromise from "eslint-plugin-promise"

export const promiseConfig: FactoryConfig = () => ({
  name: "features/promise",
  plugins: {
    promise: pluginPromise,
  },
  ...pluginPromise.configs["flat/recommended"],
  rules: {
    "promise/prefer-await-to-then": "warn",
    "promise/valid-params": "error",
  },
})
