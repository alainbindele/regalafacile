import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Assicura che le variabili d'ambiente siano disponibili
    'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.VITE_OPENAI_API_KEY),
    'import.meta.env.VITE_AMAZON_AFFILIATE_TAG': JSON.stringify(process.env.VITE_AMAZON_AFFILIATE_TAG),
    'import.meta.env.VITE_AMAZON_ACCESS_KEY': JSON.stringify(process.env.VITE_AMAZON_ACCESS_KEY),
    'import.meta.env.VITE_AMAZON_SECRET_KEY': JSON.stringify(process.env.VITE_AMAZON_SECRET_KEY),
    'import.meta.env.VITE_AMAZON_ASSOCIATE_TAG': JSON.stringify(process.env.VITE_AMAZON_ASSOCIATE_TAG),
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild'
  }
})