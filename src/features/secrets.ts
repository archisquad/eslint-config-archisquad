import pluginNoSecrets from "eslint-plugin-no-secrets"

import type { FactoryConfig } from "../types"

export const secretsConfig: FactoryConfig = () => ({
  name: "features/secrets",
  plugins: {
    "no-secrets": pluginNoSecrets,
  },
  rules: {
    "no-secrets/no-secrets": "error",
  },
})
