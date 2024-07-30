export default {
  entries: [
    {
      input: "src/index.ts",
      builder: "rollup",
    },
  ],
  rollup: {
    emitCJS: true,
  },
  clean: true,
  declaration: true,
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
  outDir: "dist",
  failOnWarn: false,
}
