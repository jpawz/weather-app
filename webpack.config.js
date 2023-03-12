const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Weather App",
      metaDesc: "The Odin Project",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  mode: "development",
  output: {
    clean: true,
  },
  devServer: {
    static: "./dist",
    open: true,
  },
};
