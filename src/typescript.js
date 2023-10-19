module.exports = {
  plugins: ["@typescript-eslint"],

  overrides: [
    {
      files: ["**/*.{ts,tsx,mts,cts}"],
      extends: [
        // @typescript-eslint config have plugin & parser config inside
        "plugin:@typescript-eslint/recommended",
        // Must be both, because recommended-requiring-type-checking do not enclose recommended
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:etc/recommended",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            allowIIFEs: true,
          },
        ],
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowNumber: true,
            allowNullish: true,
          },
        ],
        "etc/no-commented-out-code": "warn",
        "etc/no-const-enum": "error",
        "etc/no-t": "error",
        "etc/throw-error": "error",
        "etc/underscore-internal": "error",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "etc/no-t": "off",
      },
    },
    {
      files: ["**/*.cts"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
}
