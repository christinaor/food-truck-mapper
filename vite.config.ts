import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_MAPS_API_KEY': `"${process.env.MAPS_API_KEY}"`,
    'process.env.VITE_OPEN_CAGE_API_KEY': `"${process.env.OPEN_CAGE_API_KEY}"`
  }
})
