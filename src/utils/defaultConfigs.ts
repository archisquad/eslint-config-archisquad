import type { JsonConfig, NodeConfig, TypescriptConfig, YamlConfig } from "../types";
import { JS_FILES, JSON_FILES, MD_FILES, TS_FILES, YAML_FILES } from "./constants";

export const nodeDefaultConfig: NodeConfig = {
  files: JS_FILES,
}

export const typescriptDefaultConfig: TypescriptConfig = {
  files: TS_FILES,
}

export const markdownDefaultConfig: TypescriptConfig = {
  files: MD_FILES,
}

export const yamlDefaultConfig: YamlConfig = {
  files: YAML_FILES,
  prettier: false,
}

export const jsonDefaultConfig: JsonConfig = {
  files: JSON_FILES,
  prettier: false,
}
