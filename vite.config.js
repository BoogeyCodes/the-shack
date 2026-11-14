import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/the-shack/' for GitHub Pages project site, '/' for local dev
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/the-shack/' : '/',
  plugins: [react()],
})
