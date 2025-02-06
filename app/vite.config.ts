import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/spa_deploy",
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@tests": "/src/tests",
    },
  },
});
