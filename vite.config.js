import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path:
//  - GitHub Pages project site needs '/the-shack/'
//  - Railway / any root-domain host needs '/'  -> set VITE_BASE_PATH=/
//  - local dev uses '/'
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/the-shack/' : '/')

export default defineConfig({
  base,
  plugins: [react()],
})
