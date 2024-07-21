// @ts-expect-error -- unicorn plugin is not typed
import pluginUnicorn from 'eslint-plugin-unicorn'
import type { FactoryConfig } from '../types'

export const unicornConfig: FactoryConfig = () => ({
  name: 'common/unicorn',
  plugins: {
    unicorn: pluginUnicorn as any,
  },
  rules: {
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
    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-instanceof-array': 'error',
    // Ban `new Array` as `Array` constructor's params are ambiguous
    'unicorn/no-new-array': 'error',
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    'unicorn/number-literal-case': 'error',
    // textContent instead of innerText
    'unicorn/prefer-dom-node-text-content': 'error',
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // Prefer using number properties like `Number.isNaN` rather than `isNaN`
    'unicorn/prefer-number-properties': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-string-starts-ends-with': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',
  }
})
