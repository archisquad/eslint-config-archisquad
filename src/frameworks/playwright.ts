import playwright from "eslint-plugin-playwright"

import type { PartialDeep } from "type-fest"

import type { FactoryConfig, PlaywrightConfig } from "../types"

export const playwrightConfig: FactoryConfig<PartialDeep<PlaywrightConfig>> = (
  config
) => {
  if (!config) {
    throw new Error("Playwright config requires a config object")
  }

  return {
    files: config.files,
    name: "frameworks/playwright",
    ...playwright.configs["flat/recommended"],
    rules: {
      "playwright/no-duplicate-hooks": "error",
      "playwright/no-get-by-title": "error",
      "playwright/prefer-comparison-matcher": "error",
      "playwright/prefer-equality-matcher": "error",
      "playwright/prefer-hooks-in-order": "error",
      "playwright/prefer-hooks-on-top": "error",
      "playwright/prefer-strict-equal": "error",
      "playwright/prefer-to-be": "error",
      "playwright/prefer-to-contain": "error",
    },
  }
}
