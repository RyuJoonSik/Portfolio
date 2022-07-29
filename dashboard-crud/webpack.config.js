const path = require("path");
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // mode: "production",
  mode: "development",
  entry: "./App.tsx",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname) + "/public",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
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
