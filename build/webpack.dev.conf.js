'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config').dev
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [path.join(__dirname, '../src'), path.join(__dirname, '../test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.showEslintErrorsInOverlay
  }
})

const devWebpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/docs/app.js'
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath
  },
  module: {
    rules: [
      ...(utils.styleLoaders({ sourceMap: config.cssSourceMap, usePostCSS: true })),
      ...(config.useEslint ? [createLintingRule()] : []),
    ]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.host,
    port: PORT || config.port,
    open: config.autoOpenBrowser,
    overlay: config.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.assetsPublicPath,
    proxy: config.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/docs/index.html',
      inject: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
