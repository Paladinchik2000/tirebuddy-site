import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '11d02be2-30ed-4ada-a254-70d3f39d5201-00-gyl2skbu47gz.worf.replit.dev', // Часто нужно для облачных IDE
    allowedHosts: true
  }
})
