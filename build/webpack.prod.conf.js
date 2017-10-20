'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const env = config.build.env

const prodWebpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'vue-bs-pagination.js',
    library: 'VuePagination',
    libraryTarget: 'umd'
  },
  devtool: config.build.cssSourceMap ? '#source-map' : false,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.cssSourceMap,
      extract: config.build.cssExtract
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  prodWebpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = prodWebpackConfig
