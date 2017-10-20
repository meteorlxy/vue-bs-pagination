'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const isDocs = process.argv.indexOf('--docs') > 0

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? isDocs
      ? config.docs.cssSourceMap
      : config.build.cssSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
      ? isDocs
      ? config.docs.cssExtract
      : config.build.cssExtract
      : config.dev.cssExtract
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
