# eslint-config-archisquad

## 2.4.1

### Patch Changes

- cc9082a: [FIXED]: Error in perfectionist default configuration. The groups has
  a `property-multiline` entry instead of `multiline-property`.

## 2.4.0

### Minor Changes

- 7249e7a: **[CHANGE]**: Upgrade dependencies:
  - `eslint`: 9.14.0 → 9.17.0
  - `eslint-plugin-unicorn`: 56.0.0 → 56.0.1
  - `eslint-plugin-prettier`: 5.2.0 → 5.2.1
  - `eslint-config-prettier`: 9.0.0 → 9.1.0
  - `eslint-plugin-promise`: 7.1.0 → 7.2.1
  - `eslint-plugin-compat`: 6.0.1 → 6.0.2
  - `eslint-plugin-no-secrets`: 2.0.0 → 2.1.1
  - `eslint-plugin-n`: 17.13.1 → 17.15.1
  - `eslint-plugin-markdown`: 5.0.0 → 5.1.0
  - `eslint-plugin-yml`: 1.15.0 → 1.16.0
  - `eslint-plugin-jsonc`: 2.17.0 → 2.18.2
  - `eslint-plugin-playwright`: 2.0.0 → 2.1.0
  - `@vitest/eslint-plugin`: 1.1.8 → 1.1.24
  - `eslint-plugin-perfectionist`: 3.9.1 → 4.6.0
  - `eslint-config-flat-gitignore`: 0.3.0 → 1.0.0
  - `type-fest`: 4.26.1 → 4.32.0
  - `eslint-flat-config-utils`: 0.4.0 (new)
  - `@eslint/js`: 9.14.0 → 9.17.0
  - `@typescript-eslint/parser`: 8.13.0 → 8.19.1
  - `@typescript-eslint/eslint-plugin`: 8.13.0 → 8.19.1
- 2a41b86: [CHANGE]: Upgraded eslint-plugin-perfectionist to v4.6.0. Added
  config for new rules available in the plugin. Expanded configuration to cover
  new cases such as: sorting elements in modules, support for reading aliases
  from TSConfig file.

## 2.3.0

### Minor Changes

- 680473a: **[ADDED]**: Support for globals
- 8b2f2cb: **[ADDED]**: Re-export the `composer` and `concat` utils from
  `eslint-flat-config-utils`.

## 2.2.0

### Minor Changes

- a8c3764: **[CHANGE]**: Upgraded dependencies

  - @eslint/js 9.14.0 → 9.15.0
  - @typescript-eslint/eslint-plugin 8.13.0 → 8.14.0
  - @typescript-eslint/parser 8.13.0 → 8.14.0
  - @vitest/eslint-plugin 1.1.8 → 1.1.10
  - eslint 9.14.0 → 9.15.0
  - eslint-plugin-jsonc 2.17.0 → 2.18.1
  - eslint-plugin-n 17.13.1 → 17.13.2
  - type-fest 4.26.1 → 4.27.0

## 2.1.0

### Minor Changes

- 9632acd: This release brings a series of important updates to our
  dependencies, ensuring improved performance, enhanced security, and better
  compatibility with the latest tools and libraries. These updates are crucial
  for maintaining a modern and efficient development environment.

  #### Updated dependencies

  - Updated `eslint-plugin-jsonc` to version 2.17.0.
  - Updated `eslint-plugin-n` to version 17.13.1.
  - Updated `@typescript-eslint/eslint-plugin` to version 8.13.0.
  - Updated `eslint` to version 9.14.0.
  - Updated `prettier` to version 3.3.3.
  - Updated `@archisquad/prettier-config` to version 2.0.1.
  - Updated `eslint-plugin-unicorn` to version 56.0.0.
  - Updated `eslint-plugin-prettier` to version 5.2.1.
  - Updated `eslint-config-prettier` to version 9.1.0.
  - Updated `eslint-plugin-promise` to version 7.1.0.
  - Updated `eslint-plugin-compat` to version 6.0.1.
  - Updated `eslint-plugin-no-secrets` to version 1.1.2.
  - Updated `eslint-plugin-yml` to version 1.15.0.
  - Updated `eslint-plugin-playwright` to version 2.0.1.
  - Updated `@vitest/eslint-plugin` to version 1.1.8.
  - Updated `eslint-plugin-perfectionist` to version 3.9.1.
  - Updated `eslint-config-flat-gitignore` to version 0.3.0.
  - Updated `@eslint/js` to version 9.14.0.
  - Updated `@typescript-eslint/parser` to version 8.13.0.
  - Updated `@typescript-eslint/eslint-plugin` to version 8.13.0.

## 2.0.0

### Major Changes

- 582b83d: [BREAKING]: Migrate to Flat Config & ESLint v9. Drop support for
  Legacy Config & ESLint v8.

  [ADDED]: Suport for Perfectionist Plugin.

## 1.3.0

### Minor Changes

- e8a452a: Upgraded dependencies: TS support for v5.3,
  @html-eslint/eslint-plugin to v0.23.1, eslint-plugin-jsonc to v2.13.0,
  eslint-plugin-n to v16.6.2, eslint-plugin-playwright to v0.22.2,
  eslint-plugin-prettier to v5.1.3, eslint-plugin-security to v2.1.0,
  eslint-plugin-unicorn to v50.0.1, eslint-plugin-vitest to v0.3.21,
  eslint-plugin-yml to v1.12.2

## 1.2.0

### Minor Changes

- 82d2b2a: Updated dependencies: @typescript-eslint/eslint-plugin to v6.13.1,
  @typescript-eslint/parser to v6.13.1, eslint to v8.55.0,
  eslint-config-prettier to v9.1.0, eslint-plugin-playwright to v0.19.0

## 1.1.0

### Minor Changes

- 03613d9: Upgrade dependencies: eslint-plugin-unicorn to v49,
  @typescript-eslint/eslint-plugin to v6.12.0, eslint to v8.54.0,
  @microsoft/eslint-plugin-sdl to v0.2.2, @html-eslint/parser to v0.21.0,
  @html-eslint/eslint-plugin to v0.21.0, eslint-plugin-n to v16.3.1,
  eslint-plugin-vitest to v0.3.10

### Patch Changes

- 0f59c63: Upgrade Prettier peerDependency to v3.1.0

## 1.0.0

### Major Changes

- fb1dbf7: Initial release
