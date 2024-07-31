import nPlugin from "eslint-plugin-n"

import type { FactoryConfig, NodeConfig } from "../types"

export const nodeConfig: FactoryConfig<NodeConfig> = (config) => ({
  files: config.files,
  name: "languages/node",
  ...nPlugin.configs["flat/recommended-script"],
  rules: {
    "n/prefer-node-protocol": "error",
    "n/prefer-promises/fs": "error",
    // Still not all JS files are modules
    "unicorn/prefer-module": "off",
  },
})
