import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Base path for production - change to '/subdirectory/' if hosting in a subdirectory
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure proper asset handling for static hosting
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Ensure consistent asset file names
        assetFileNames: 'assets/[name].[hash].[ext]',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js'
      }
    }
  }
})

