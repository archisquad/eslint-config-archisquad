import { configFactory } from "./dist/index.mjs"

export default [
  ...(await configFactory({
    features: {
      promise: true,
    },
    language: {
      markdown: true,
      typescript: true,
    },
    prettier: true,
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
