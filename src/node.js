module.exports = {
  env: {
    node: true,
    browser: false,
  },

  extends: [
    require.resolve("./ecma.js"),
    require.resolve("./typescript.js"),
    require.resolve("./yaml.js"),
    require.resolve("./json.js"),
    require.resolve("./markdown.js"),
    "plugin:n/recommended",
    "plugin:security/recommended",
    require.resolve("./prettier.js"),
  ],

  rules: {
    "unicorn/prefer-string-replace-all": "error",
    // Still not all JS files are modules
    "unicorn/prefer-module": "off",
  },
}
