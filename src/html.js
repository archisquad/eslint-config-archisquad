module.exports = {
  plugins: ["@html-eslint", "html"],

  overrides: [
    {
      files: ["**/*.html"],
      extends: ["plugin:@html-eslint/recommended"],
      parser: "@html-eslint/parser",
    },
  ],
}
