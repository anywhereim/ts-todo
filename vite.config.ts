import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@page", replacement: "/src/page" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
