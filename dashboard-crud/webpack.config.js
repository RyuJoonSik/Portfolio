const path = require("path");

module.exports = {
  mode: "production",
  entry: "./App.tsx",
  // entry: "./App.ts",
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
