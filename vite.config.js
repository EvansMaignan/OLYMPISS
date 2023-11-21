import path from 'path';

export default {
  server: {
    fsServe: {
      strict: true,
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: './',
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'MyLib',
      formats: ['es', 'umd'],
    },
  },
  resolve: {
    extensions: ['.js'],
  }
};
