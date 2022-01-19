import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ],
  base: './',
  publicDir: 'public',
  assetsInclude: ['**/*.gltf'],
  build: {
    assetsDir:'assets',

  }
})


