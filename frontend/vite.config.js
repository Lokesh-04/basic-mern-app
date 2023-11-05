import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://basic-mern-app-backend.vercel.app', //backend url needs to be changed during deployment...
    },
  },
  plugins: [react()],
})
