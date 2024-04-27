import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/anime/index.ts", "src/types/index.ts"],
  dts: true,
  format: ["cjs", "esm"],
  outDir: "dist",
  clean: true,
  sourcemap: "inline",
});
