module.exports = {
  extends: ["plugin:playwright/playwright-test"],

  rules: {
    "id-length": "off",
    "new-cap": "off",
    "multiline-comment-style": "off",
    "max-lines-per-function": "off",
    "max-statements": ["warn", 24, { ignoreTopLevelFunctions: true }],
    "unicorn/prefer-dom-node-text-content": "warn",
    "@typescript-eslint/restrict-template-expressions": "off",
    "eslint-comments/require-description": "off",
    // Causing false positives with some selectors
    "no-secrets/no-secrets": "warn",
    "playwright/prefer-to-be": "error",
    "playwright/prefer-to-have-length": "error",
    "playwright/require-top-level-describe": [
      "error",
      { maxTopLevelDescribes: 5 },
    ],
  },
}
