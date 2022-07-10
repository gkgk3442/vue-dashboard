import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import compress from "vite-plugin-compression";
import analyze from "rollup-plugin-analyzer";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    compress({ threshold: 0, algorithm: "brotliCompress" }),
    analyze(),
    manualChunksPlugin(),
  ],
});
