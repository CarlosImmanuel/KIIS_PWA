import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/akademik': {
        target: 'https://newapidevkiisakademik.ibik.ac.id/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/akademik/, ''),
      },
      '/auth': {
        target: 'https://newapidevkiismanajemenuser.ibik.ac.id/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      },
      '/finance': {
        target: 'https://newapidevkiisfinance.ibik.ac.id/',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/finance/, ''),
      },
    },
  },
})
