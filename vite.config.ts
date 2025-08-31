// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ← Importa el plugin de React

export default defineConfig({
  plugins: [
    react() // ← Esto activa el soporte para React + JSX
  ],
});