'use strict'

var test = require('tape')
var openGraphMeta = require('./')
var openGraphTags = require('./tags')

var data = {
  title: 'The Title',
  image: {
    url: 'image.jpg',
    width: 100,
    height: 200
  }
}

test('data', function (t) {
  t.deepEqual(openGraphMeta(data), {
    'og:title': 'The Title',
    'og:image:url': 'image.jpg',
    'og:image:width': 100,
    'og:image:height': 200
  })

  t.end()
})

test('tags', function (t) {
  t.deepEqual(openGraphTags(data), [
    {property: 'og:title', content: 'The Title'},
    {property: 'og:image:url', content: 'image.jpg'},
    {property: 'og:image:width', content: 100},
    {property: 'og:image:height', content: 200}
  ])

  t.end()
})
