import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';


// "../."
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@icons': resolve(__dirname, 'src/assets/icons'),
      '@images': resolve(__dirname, 'src/assets/images'),
    },
  },
  build: {
    sourcemap: true,
  },
});