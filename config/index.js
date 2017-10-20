'use strict'

const path = require('path')

module.exports = {
  docs: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../gh-pages'),
    index: path.resolve(__dirname, '../gh-pages/index.html'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: true,
    cssExtract: true,
    bundleAnalyzerReport: process.env.npm_config_report
  },
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    cssSourceMap: true,
    cssExtract: false,
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    cssExtract: false,
  }
}
