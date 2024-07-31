// @ts-expect-error -- promise plugin is not typed
import pluginPromise from "eslint-plugin-promise"

import type { FactoryConfig } from "../types"

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
