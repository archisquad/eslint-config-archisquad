// @ts-expect-error -- no-secrets plugin is not typed
import pluginNoSecrets from "eslint-plugin-no-secrets"

import type { FactoryConfig } from "../types"

export const secretsConfig: FactoryConfig = () => ({
  name: "features/secrets",
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "no-secrets": pluginNoSecrets as any,
  },
  rules: {
    "no-secrets/no-secrets": "error",
  },
})
