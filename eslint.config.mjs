import { configFactory } from './dist/index.mjs';

export default await configFactory({
  prettier: true,
  features: {
    promise: true,
    secrets: true,
    compat: true,
  },
  language: {
    typescript: true,
  }
})
