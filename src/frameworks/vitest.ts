import vitestPlugin from "eslint-plugin-vitest"

import type { FactoryConfig, VitestConfig } from "../types"

export const vitestConfig: FactoryConfig<VitestConfig> = (config) => {
  const extraRulesOff = config.typescript
    ? ({
        // In unit & integration tests often creates a lot of noise
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-confusing-void-expression": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/unbound-method": "warn",
      } as const)
    : {}

  return {
    files: config.files,
    name: "frameworks/vitest",
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      ...extraRulesOff,
      "line-comment-position": "warn",
      "max-classes-per-file": "off",
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": ["warn", { max: 6 }],
      "max-params": ["error", 5],
      "max-statements": ["warn", 20],
      "multiline-comment-style": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-reduce": "warn",
      "unicorn/no-unsafe-regex": "off",
      "vitest/consistent-test-it": "error",
      "vitest/max-expects": ["error", { max: 10 }],
      "vitest/max-nested-describe": ["error", { max: 5 }],
      "vitest/no-alias-methods": "off",
      "vitest/no-conditional-expect": "error",
      "vitest/no-disabled-tests": "warn",
      // Messy rule when you're using test context
      "vitest/no-done-callback": "off",
      "vitest/no-duplicate-hooks": "error",
      "vitest/no-focused-tests": "error",
      // Warning due to test abstractions could be including a lot of common expects
      "vitest/no-standalone-expect": "warn",
      "vitest/no-test-return-statement": "error",
    },
  }
}
