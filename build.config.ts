import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    {
      builder: "rollup",
      input: "src/index.ts",
    },
  ],
  externals: [
    "yaml-eslint-parser",
    "jsonc-eslint-parser",
    "eslint-visitor-keys",
    "yaml",
    "semver",
    "lodash",
    "espree",
    "acorn",
    "acorn-jsx",
  ],
  failOnWarn: false,
  outDir: "dist",
  rollup: {
    emitCJS: true,
  },
})
