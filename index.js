'use strict'

var flatten = require('flat').flatten
var pipe = require('value-pipe')
var ap = require('ap')
var partial = ap.partial
var pair = require('object-pair')

module.exports = pipe(
  partial(pair, 'og'), // {og: obj}
  ap.partialRight(flatten, {delimiter: ':'}) // {og:title, ...}
)
