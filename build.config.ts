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
  outDir: "dist",
  failOnWarn: false,
}
