import { defineConfig } from 'vite'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  plugins: [
    {
      name: 'copy-readme',
      closeBundle() {
        copyFileSync('README.md', 'dist/README.md')
      }
    }
  ]
})
