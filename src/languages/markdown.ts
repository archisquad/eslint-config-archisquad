import { FactoryConfig, MarkdownConfig } from "../types"
// @ts-expect-error -- no types available
import markdownPlugin from "eslint-plugin-markdown"

export const markdownConfig: FactoryConfig<MarkdownConfig> = (config) => ({
  files: config.files,
  plugins: {
    markdown: markdownPlugin,
  },
  processor: "markdown/markdown",
  rules: {
    // The Markdown parser automatically trims trailing
    // newlines from code blocks.
    "eol-last": "off",

    // In code snippets and examples, these rules are often
    // counterproductive to clarity and brevity.
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "padded-blocks": "off",

    // Adding a "use strict" directive at the top of every
    // code block is tedious and distracting. The config
    // opts into strict mode parsing without the directive.
    "strict": "off",

    // The processor will not receive a Unicode Byte Order
    // Mark from the Markdown parser.
    "unicode-bom": "off",
  },
})
