import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), reactRefresh()],
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: '/index.html',
    },
  },
  server: {
    host: true,
    port: 1802,
  },
})
