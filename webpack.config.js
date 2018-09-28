module.exports = {
  mode: 'development',
  context: __dirname,
  entry: __dirname+"/main.js",
  output: {
      libraryTarget: 'commonjs',
      path: __dirname+"/dist",
      filename: 'raiden.js'
  },
  externals: {
    'tiny-ecs': {
      commonjs: 'tiny-ecs',
      commonjs2: 'tiny-ecs',
      amd: 'tiny-ecs',
      root: 'tiny-ecs'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
