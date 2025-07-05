import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sree_Krishna_Agencies/',
  plugins: [react()],
  // Remove optimizeDeps unless you're having specific issues with lucide-react
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clears the dist folder before building
    sourcemap: true // Optional: helps with debugging
  }
});