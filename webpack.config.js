const webpack = require('webpack'); const 
devMode = process.env.NODE_ENV !== 
'production'; const MiniCssExtractPlugin = 
require("mini-css-extract-plugin"); 
module.exports = {
				mode: 
'development',
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
      exclude: 
/(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : 
MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
  ]
}
};
