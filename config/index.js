var path = require('path')
var glob = require('glob')

var build = {
  env: require('./prod.env'),
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  productionGzip: false, // 是否开启gzip
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: process.env.npm_config_report
}

var dev = {
  env: require('./dev.env'),
  port: 8080,
  autoOpenBrowser: false,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {},
  cssSourceMap: false
}

module.exports = {
  dev: dev,
  build: build
}
