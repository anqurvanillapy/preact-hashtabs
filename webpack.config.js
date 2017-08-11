const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: ['./app.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new CopyPlugin([{from: 'index.html'}])]
}
