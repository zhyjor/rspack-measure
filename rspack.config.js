const path = require('path');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  builtins: {
    html: [{ template: './public/index.html' }],
  },
  devServer: {
    hot: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.png|svg$/,
        type: 'asset',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
