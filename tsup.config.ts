import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/anime/index.ts", "src/simkl/index.ts", "src/types/index.ts"],
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
});
