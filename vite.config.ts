import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        antworten: 'antworten/index.html',
        impressum: 'impressum/index.html',
        datenschutz: 'datenschutz/index.html',
        notfound: '404.html',
      },
    },
  },
  server: { host: true, port: 5173 },
  preview: { host: true, port: 5173 },
});
