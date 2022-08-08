const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
        /** Будет запускать сервер на localhost:8080 в этой папке*/
    contentBase: './dist',
  },
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true,
  }
}