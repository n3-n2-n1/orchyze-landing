import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './public', // Carpeta estática
  build: {
    outDir: './dist',
  },
});
