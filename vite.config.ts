// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // CHANGE 1: Remove or comment out the hardcoded base
  // base: '/portfolio/', 
  
  server: {
    host: true, 
    port: 5173,
    hmr: {
      // CHANGE 2: Remove the hardcoded path. 
      // Auto-detection works best for Docker/Local unless you have a specific proxy setup.
      // path: '/portfolio/',
      clientPort: 5173,
    },
    watch: {
      usePolling: true,
    }
  }
})
