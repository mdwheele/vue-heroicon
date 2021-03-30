import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue-heroicon-next',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
