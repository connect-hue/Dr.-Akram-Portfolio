import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.GIF'] // Add the image file extensions you're using

})
