import path from 'path'
import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'variantjs-core',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      plugins: [
        typescript({
          "exclude": ["node_modules", 'src/__tests/**/*']
        }),
      ],
    }
  }
})
