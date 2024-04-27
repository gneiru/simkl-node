import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/anime/index.ts", "src/types/index.ts", "src/index.ts"],
  dts: true,
  format: ["cjs", "esm"],
});
