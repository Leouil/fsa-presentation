import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
  optimizeDeps: {},
  build: {
    // Disable minification for faster rebuilds during development
    minify: false,
  },
});
