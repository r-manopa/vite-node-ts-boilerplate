import * as path from 'node:path'
import { defineConfig } from 'vite'
import pkg from './package.json';

export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: false,
    minify: true,
    target: ['node18'],
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        /node:/,
      ]
    },
    lib: {
      entry: path.join(__dirname, 'src', 'main.ts'),
      fileName: 'index',
      formats: ['cjs'],
    },
    outDir: path.join(__dirname, 'bin'),
  }
})