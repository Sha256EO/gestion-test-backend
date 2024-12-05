import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Asegúrate de que la base esté configurada correctamente
  build: {
    target: 'esnext', // Genera código compatible con módulos modernos
    manifest: true,
  },
});
