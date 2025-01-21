import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,  // This makes the server accessible over the local network
    port: 5173,  // Ensure this port is open and accessible
  },
  plugins: [react()],
});
