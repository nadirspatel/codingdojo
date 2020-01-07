module.exports = {
  entry: './main.js',
  output: {
        filename: "bundle.js",
        path: __dirname + '/webpacked_code'
  },
  resolve: {root [__dirname]},
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}