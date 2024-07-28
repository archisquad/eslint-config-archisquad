import type { FactoryConfig, PlaywrightConfig } from "../types"
import playwright from "eslint-plugin-playwright"

export const playwrightConfig: FactoryConfig<PlaywrightConfig> = (config) => ({
  name: "frameworks/playwright",
  files: config.files,
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
})
