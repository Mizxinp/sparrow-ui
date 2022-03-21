import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx', name: 'sparrow-ui',
      formats: ['es']
    },
    // rollupOptions: {
    //   external: ['react'],
    //   output: {
    //     globals: {
    //       react: 'React'
    //     }
    //   }
    // }
  }
})
