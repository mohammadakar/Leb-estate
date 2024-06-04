import { defineConfig } from 'vite'
import react from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:4000',
        secure:false,
      },
    },
  },
  plugins: [react()],
})
