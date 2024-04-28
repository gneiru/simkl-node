import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/anime/index.ts", "src/types/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  sourcemap: true,
  splitting: false,
  clean: false,
  bundle: true,
  minify: true,
});
