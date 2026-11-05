import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Relative asset URLs work on GitHub Pages project sites.
  build: {
    outDir: 'docs', // The instructor requires the production site in docs.
  },
});
