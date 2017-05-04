var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
// 自动生成html插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack错误信息插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 添加热重载插件
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client.js'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new FriendlyErrorsPlugin()
  ]
})

var pages = utils.getEntries('./src/module/**/*.html')

for (var pathName in pages) {
  var conf = {
    filename: pathName + '.html',
    template: pages[pathName],
    inject: true,
    excludeChunks: Object.keys(pages).filter(item => item !== pathName)
  }

  module.exports.plugins.push(new HtmlWebpackPlugin(conf))
}
