import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["components"],
  format: ["esm"],
  clean: true,
  dts: true,
  minify: true,
  external: ["react"],
  ...options,
}));
