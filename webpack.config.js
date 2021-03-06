const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dotenv = require("dotenv");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
dotenv.config({ path: ".env" });

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  // just for testing
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    static: ["public", "src"],
    hot: true,
    port: `${process.env.DEV_PORT}`,
  },
};