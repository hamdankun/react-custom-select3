import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/index.tsx', // Adjust the entry point as needed
      name: 'react-custom-select3',
      fileName: (format) => `react-custom-select3.${format}.js`,
    },
    rollupOptions: {
      // Ensure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
