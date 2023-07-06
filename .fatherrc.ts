import { defineConfig } from "father";

export default defineConfig({
  esm: {
    input: "components",
    output: "ui-dist",
  },
});
