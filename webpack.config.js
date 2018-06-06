var webpack = require('webpack');
module.exports = {
    context: __dirname,
    entry: __dirname+"/main.js",
    output: {
        path: __dirname+"/dist",
        filename: 'bundle.js'
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