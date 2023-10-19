module.exports = {
  extends: [
    require.resolve("./ecma.js"),
    require.resolve("./typescript.js"),
    require.resolve("./html.js"),
    require.resolve("./json.js"),
    require.resolve("./markdown.js"),
    require.resolve("./yaml.js"),
    require.resolve("./prettier.js"),
  ],

  overrides: [
    {
      files: ["**/*.config.{js,cjs,mjs}", "**/.eslintrc.{js,cjs}"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
}
