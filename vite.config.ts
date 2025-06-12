// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Ramesh_Trading_company/', // <-- Add this line
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
