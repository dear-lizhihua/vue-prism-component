import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    minify: false,
    lib: {
      formats: ['esm'],
      entry: path.resolve(__dirname, 'src/index.js'),
      // name: 'PrismComponent',
      fileName: (format) => `vue-prism-component.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue',
        'prismjs',
      ]
    }
  }
})
