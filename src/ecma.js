module.exports = {
  env: {
    browser: true,
    es2022: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:compat/recommended",
    "plugin:unicorn/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    require.resolve("./prettier.js"),
  ],

  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    "unicorn",
    "compat",
    "no-secrets",
    "promise",
    "sonarjs",
    "@microsoft/sdl",
    "write-good-comments",
  ],

  rules: {
    "no-secrets/no-secrets": "error",
    "no-caller": "error",
    "no-delete-var": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "@microsoft/sdl/no-cookies": "error",
    "@microsoft/sdl/no-document-domain": "error",
    "@microsoft/sdl/no-document-write": "error",
    "@microsoft/sdl/no-html-method": "error",
    "@microsoft/sdl/no-inner-html": "error",
    "@microsoft/sdl/no-insecure-url": "error",
    "@microsoft/sdl/no-msapp-exec-unsafe": "error",
    "@microsoft/sdl/no-postmessage-star-origin": "error",
    "@microsoft/sdl/no-winjs-html-unsafe": "error",
    "write-good-comments/write-good-comments": "warn",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: [
          "^(README|LICENSE|CHANGELOG)\\.md$",
          "pnpm-lock\\.yaml$",
          "package-lock\\.json$",
          ".*\\.config\\.(js|cjs|mjs)$",
        ],
      },
    ],
    // Array.prototype.forEach is fine
    "unicorn/no-array-for-each": "off",
    // Array.prototype.reduce & reduceRight are fine
    "unicorn/no-array-reduce": "off",
    // This rule is too strict & require a lot of configuring to the project's specific needs
    "unicorn/prevent-abbreviations": "off",
    // Don't force to use undefined everywhere
    "unicorn/no-null": "warn",
    // This rule gives nothing
    "eslint-comments/disable-enable-pair": "off",
    // This rule not working well with monorepos
    "unicorn/prefer-node-protocol": "off",
  },
}
