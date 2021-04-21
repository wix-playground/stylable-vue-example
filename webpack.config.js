const { StylableWebpackPlugin } = require("@stylable/webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.svg$/,
        type: 'asset'
      },
    ],
  },
  plugins: [
    new StylableWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
  ],
};
