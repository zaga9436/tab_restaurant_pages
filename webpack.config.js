const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },
  mode: 'development', 
  devServer: {
    static: './dist',
    open: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        type: 'asset/resource',          
      },
    ],
  },
};
