const path = require("path");

module.exports = () => ({
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../build"),
    publicPath: "/",
    filename: "static/js/[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});
