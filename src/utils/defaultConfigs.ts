import type { NodeConfig, TypescriptConfig } from "../types";
import { JS_FILES, TS_FILES } from "./constants";

export const nodeDefaultConfig: NodeConfig = {
  files: JS_FILES,
}

export const typescriptDefaultConfig: TypescriptConfig = {
  files: TS_FILES,
}
