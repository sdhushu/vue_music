import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import  path from "path";
// https://vitejs.dev/config/

const srcPath = path.resolve(__dirname, 'src');
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
  resolve: {
    alias: [
      {find: '@', replacement:srcPath}
    ]
  }
})


