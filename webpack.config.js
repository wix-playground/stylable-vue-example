const { StylableWebpackPlugin } = require("@stylable/webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.module = {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
    },
    {
      test: /\.svg$/,
      loader: "file-loader",
      options: {
        name: "static/media/[name].[hash:8].[ext]",
      },
    },
  ],
};

exports.plugins = [
  new StylableWebpackPlugin(),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin(),
];
