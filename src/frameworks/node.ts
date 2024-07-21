import nPlugin from "eslint-plugin-n";
import type { FactoryConfig, NodeConfig } from "../types";

export const nodeConfig: FactoryConfig<NodeConfig> = (config) => ({
  name: "languages/node",
  files: config.files,
  ...nPlugin.configs["flat/recommended-script"],
  rules: {
    "n/prefer-node-protocol": "error",
    "n/prefer-promises/fs": "error",
  }
})
