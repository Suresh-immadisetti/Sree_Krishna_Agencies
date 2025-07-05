import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sree_Krishna_Agencies/', // 👈 Important for GitHub Pages
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]]
      }
    })
  ],
  server: {
    port: 5173,
    strictPort: true,
    open: true // 👈 No need to open `/Sree_Krishna_Agencies/` during dev
  },
  preview: {
    port: 4173,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const packageName = id.split('node_modules/')[1].split('/')[0]
            if (packageName.startsWith('react')) return 'vendor-react'
            if (packageName.startsWith('lucide')) return 'vendor-icons'
            return 'vendor-other'
          }
        }
      }
    }
  }
})
