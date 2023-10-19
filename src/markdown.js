module.exports = {
  plugins: ["markdown"],

  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
  ],
}
