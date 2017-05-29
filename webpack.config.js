const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './webapp/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: "./webapp/js/index.js",
    output: {
        path: path.resolve('/webapp/js-built'),
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: "file-loader"
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    devServer: {
      proxy: {
        "/api": "http://127.0.0.1:9000"
      }
    },
    plugins: [
      HtmlWebpackPluginConfig,
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        Tether: 'tether',
      })
    ],
    devtool: "source-map"
};
