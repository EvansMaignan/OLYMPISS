import path from 'path';

export default {
  build: {
    outDir: 'dist',
    assetsDir: './',
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'],
    },
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    {
      // Vite plugin for TypeScript
      name: 'vite:ts',
      // Make sure tsconfig.json is in the project root
      apply: 'serve',
      options: {
        tsconfigFile: 'tsconfig.json',
      },
    },
  ],
};