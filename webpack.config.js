const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ResourcesManifestPlugin = require("resources-manifest-webpack-plugin");

function modeConfig(env) {
  return require(`${path.resolve(__dirname, "build-utils")}/webpack.${env}`)(
    env
  );
}

module.exports = ({ mode } = { mode: "production" }) => {
  return webpackMerge(
    {
      mode,
      entry: "./src/index.js",
      optimization: {
        splitChunks: { chunks: "all" }
      },
      module: {
        rules: [
          {
            test: /\.js?$/,
            use: ["babel-loader"]
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "static/media/[name].[contenthash].[ext]"
                }
              }
            ]
          }
        ]
      },
      devServer: {
        historyApiFallback: true,
        open: true,
        port: 5000,
        contentBase: path.join(__dirname, "public")
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "public/index.html",
          inject: "body",
          minify: {
            html5: true,
            removeComments: true,
            collapseWhitespace: true
          },
          templateParameters: {
            PUBLIC_URL: ""
          }
        }),
        new ResourcesManifestPlugin(
          {
            TO_CACHE: /.+\.(js|css|png|jpe?g|gif|svg|webp)$/
          },
          "public/service-worker.js"
        ),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  );
};
