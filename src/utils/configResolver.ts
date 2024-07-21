import { FlagOrConfig } from "../types";

export function configResolver<TConfig>(value: FlagOrConfig<TConfig>, defaultConfig: TConfig) {
  return typeof value === 'boolean' ? defaultConfig : value
}
