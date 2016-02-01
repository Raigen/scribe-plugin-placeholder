/*
 * Copyright 2016 Coursera Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
