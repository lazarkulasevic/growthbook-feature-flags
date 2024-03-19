import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [React()],

    // Hosted on Github Pages under url https://lazarkulasevic.github.io/growthbook-feature-flags/
    base: mode === "production" ? "/growthbook-feature-flags/" : "/",
  }
})
