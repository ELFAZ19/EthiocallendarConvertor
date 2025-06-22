import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    historyApiFallback: true,
    strictPort: true,
    port: 3000,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "/index.html",
    },
  },
  base: "/",
});
