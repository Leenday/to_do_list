const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: "development",
  // just for testing
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    static: "./dist"
  },
}