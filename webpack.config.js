module.exports = {
  entry: './src/index',
  output: {
    path: `${__dirname}/dist`,
    libraryTarget: 'umd',
    library: 'odo-starwars-name'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
