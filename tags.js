'use strict'

var pipe = require('value-pipe')
var partial = require('ap').partial
var tag = require('meta-tag-data')
var meta = require('./')

module.exports = pipe(
  meta,
  partial(tag, 'property')
)
