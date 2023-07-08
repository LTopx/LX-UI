import { defineConfig } from "tsup";

export default defineConfig({
  treeshake: true,
  splitting: true,
  entry: ["components"],
  format: ["esm"],
  clean: true,
  dts: true,
  minify: true,
  external: ["react"],
});
