// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// Important : on charge le plugin Tailwind en ESM via import() pour éviter l'erreur ESM-only
export default defineConfig(async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        'class-variance-authority@0.7.1': 'class-variance-authority',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  }
})
