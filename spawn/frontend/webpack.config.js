const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./static/src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/src/components/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              publicPath: path.resolve(__dirname, "./static/img"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            //options: {
            //  publicPath: path.resolve(__dirname, "./static/img"),
            //},
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
  
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        //NODE_ENV: JSON.stringify("production"),
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
  resolve: {
    extensions: [".js",".ts"],
    }
};