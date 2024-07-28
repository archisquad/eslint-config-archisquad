import { configFactory } from "./dist/index.mjs"

export default [
  ...(await configFactory({
    prettier: true,
    features: {
      promise: true,
    },
    language: {
      typescript: true,
      markdown: true,
    },
  })),
  {
    files: ["README.md/*.js"],
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["commitlint.config.js"],
    rules: {
      "no-undef": "off",
    },
  },
]
