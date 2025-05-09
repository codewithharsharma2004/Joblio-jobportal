import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve( "./src"),
    },
  },
 build: {
    chunkSizeWarningLimit: 1000, // sets warning limit to 1000 KB
  },
  
})
