import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import sassDts from 'vite-plugin-sass-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    sassDts(),
    react(),
    checker({
      typescript: { tsconfigPath: 'tsconfig.app.json' }
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true
  }
})
