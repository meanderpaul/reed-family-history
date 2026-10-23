import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built site works from any path (GitHub Pages project
// sites, a custom domain, or opened from disk). Routing is hash-based for the
// same reason: no server rewrites needed.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { assetsDir: 'static' },
});
