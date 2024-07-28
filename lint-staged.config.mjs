export default {
  "*.{js,cjs,mjs,ts,tsx}": ["eslint --fix"],
  "*.{ts,tsx}": () => "pnpm run type-check",
}
