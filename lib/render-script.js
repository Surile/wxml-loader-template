const con = require('consolidate')
const loaderUtils = require('loader-utils')
const fs = require('fs-extra')
const { resolve } = require('path')
const { transform } = require('babel-core')

module.exports = function(script, cb) {
  this.cacheable()

  let result = transform(script.content, {
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ]
  })

  cb(null, result.code)
}
