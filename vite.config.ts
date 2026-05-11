import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    deployment: {
      preset: "vercel",
    },
  },
});