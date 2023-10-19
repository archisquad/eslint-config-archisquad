module.exports = {
  overrides: [
    {
      files: ["**/*.{yml,yaml}"],
      extends: ["plugin:yml/standard"],
      excludedFiles: ["pnpm-lock.yaml"],
      parser: "yaml-eslint-parser",
    },
  ],
}
