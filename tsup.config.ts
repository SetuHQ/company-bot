import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "./src/index.tsx",
    },
    format: ["cjs", "esm"],
    clean: true,
    bundle: true,
    dts: true,
});
