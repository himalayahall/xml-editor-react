import { defineConfig } from 'vite';  // Add this line
import react from '@vitejs/plugin-react';  // Already present

export default defineConfig({
  plugins: [react()],
});

