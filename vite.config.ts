import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    // 2. Ensure the server listens on all IPs (useful if in Docker/VM)
    host: true, 
    port: 5173,
    hmr: {
      // 3. Force the WebSocket to connect to the correct path
      path: '/portfolio/',
      clientPort: 5173,
    },
    watch: {
      // 4. Sometimes file watching fails in specific environments (like Windows WSL2 or Docker)
      usePolling: true,
    }
  }
})
