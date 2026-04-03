import { resolve } from 'path'
import { defineConfig } from 'vite'

const projectRoot = resolve(__dirname, 'src')

export default defineConfig({
  root: projectRoot,
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'pages/index.html'),
        servicos: resolve(projectRoot, 'pages/servicos.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: '/pages/index.html',
  },
})
