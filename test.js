'use strict'

var test = require('tape')
var openGraphMeta = require('./')

test(function (t) {
  var data = {
    title: 'The Title',
    image: {
      url: 'image.jpg',
      width: 100,
      height: 200
    }
  }

  t.deepEqual(openGraphMeta(data), {
    'og:title': 'The Title',
    'og:image:url': 'image.jpg',
    'og:image:width': 100,
    'og:image:height': 200
  })

  t.end()
})
