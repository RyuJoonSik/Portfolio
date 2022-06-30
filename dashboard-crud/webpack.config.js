const path = require("path");

module.exports = {
  mode: "development",
  entry: "./App.tsx",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname),
  },
  resolve: {
    extensions: [".tsx", ".js"],
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
