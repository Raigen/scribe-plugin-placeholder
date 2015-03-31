var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/scribe-plugin-placeholder.js",
  output: {
    path: "build",
    filename: "scribe-plugin-placeholder.js",
    libraryTarget: "amd"
  },
  module: {
    loaders: [{
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('scribe-plugin-placeholder.css')
  ]
};