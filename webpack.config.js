const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  devtool: 'source-map',

  watch: true,
  
  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.s[ac]ss$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
