import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['defaults', 'not IE 11', 'chrome >= 50', 'android >= 5'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  base: '/',
  server: {
    port: 3002,
    host: true
  }
});

