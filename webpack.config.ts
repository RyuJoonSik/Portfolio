const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // mode: "production",
  mode: "development",
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  entry: "./App.tsx",
  // entry: "./Temp.tsx",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname) + "/public",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
