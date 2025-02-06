import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@tests": "/src/tests",
    },
  },
});
