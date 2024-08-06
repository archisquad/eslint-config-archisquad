# archisquad ESLint Config

Our shareable config & rules for ESLint v9

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![CI: Test][github-actions-src]][github-actions-href]

## How to use it?

1.Add package & necessary dependencies (such as `ESlint` & `Prettier`) to your
repository, for, e.g. with `pnpm` or your package manager of choice:

```bash
pnpm i -D eslint prettier eslint-config-archisquad
```

2.Create your local ESLint config file with archisquad `configFactory`:

```js
import { configFactory } from "eslint-config-archisquad"

export default await configFactory({
  // your config goes here
})
```

### Configuration

Our ESLint configuration is quite configurable, let's deep dive into the options.

```ts
import { configFactory } from "eslint-config-archisquad"

export default await configFactory({
  // Basically it's all abut enabling some plugins. All features are disabled by default.
  features: {
    // Enables the eslint-compat-plugin
    compat: true,
    // Enables the eslint-promise-plugin
    promise: true,
    // Enables the eslint-secrets-plugin
    secrets: true
  },
  // Support for different frameworks.
  frameworks: {
    // You can also set to `true` if all of your files are for Node.js
    node: {
      // Pass the glob pattern for matching for enable Playwright config
      files: ["server/**/*.ts"],
    },
    playwright: {
      // Pass the glob pattern for matching for enable Playwright config
      files: ["tests/**/*.e2e.ts"],
    },
    vitest: {
      // Pass the glob pattern for matching for enable Playwright config
      files: ["tests/**/*.test.ts"],
      // Set to true if your test files are written in TypeScript
      typescript: true,
    }
  },
  // Configuration for different languages, each of them can be simply turned on, by setting
  // true. If you want to customize the files, set an object value.
  language: {
    json: {
      files: ["**/*.json"],
    },
    markdown: {
      files: ["**/*.md", "**/*.mdx"],
    },
    typescript: {
      files: ["**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
    },
    yaml: {
      files: ["**/*.yaml", "**/*.yml"],
    },
  },
  // Options for plugins built-in into this ESLint config
  options: {
    // Setup for Perfectionist plugin
    perfectionist: {
      ignoreCase: true,
      order: "asc",
      sortType: "alphabetical"
      // There is more advanced options available, to dig into look at the types.ts file
    }
  }
})
```

## Used rulesets & plugins

- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [compat](https://github.com/amilajack/eslint-plugin-compat)
- [jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)
- [yml](https://github.com/ota-meshi/eslint-plugin-yml)
- [no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [markdown](https://github.com/eslint/eslint-plugin-markdown)
- [prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
- [promise](https://github.com/eslint-community/eslint-plugin-promise)
- [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [n](https://github.com/eslint-community/eslint-plugin-n)
- [vitest](https://github.com/veritem/eslint-plugin-vitest)
- [playwright](https://github.com/playwright-community/eslint-plugin-playwright)
- [perfectionist](https://perfectionist.dev/)
- [eslint-config-flat-gitignore](https://github.com/antfu/eslint-config-flat-gitignore)

## Development

First make a copy of this repository and install all dependencies using `pnpm`:

```bash
git clone git@github.com:archisquad/eslint-config-archisquad.git
cd eslint-config-archisquad
pnpm i
```

Then, create a branch, make your changes in code, commit it following
[gitmoji](https://gitmoji.dev/) &
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) styles.

After that, push it and then create a
[Pull Request](https://github.com/archisquad/eslint-config-archisquad/pulls)
with the target to `main` branch.

## License

[MIT](./LICENSE.md)

<!-- Badges -->

[npm-version-src]:
  https://img.shields.io/npm/v/eslint-config-archisquad?style=flat-square
[npm-version-href]: https://npmjs.com/package/eslint-config-archisquad
[npm-downloads-src]:
  https://img.shields.io/npm/dm/eslint-config-archisquad?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/eslint-config-archisquad
[github-actions-src]:
  https://img.shields.io/github/actions/workflow/status/archisquad/eslint-config-archisquad/release.yml?branch=main&style=flat-square
[github-actions-href]:
  https://github.com/archisquad/eslint-config-archisquad/actions/workflows/release.yml
