# open-graph-meta [![Build Status](https://travis-ci.org/bendrucker/open-graph-meta.svg?branch=master)](https://travis-ci.org/bendrucker/open-graph-meta) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/open-graph-meta.svg)](https://greenkeeper.io/)

> Generate Open Graph meta tags


## Install

```
$ npm install --save open-graph-meta
```


## Usage

```js
var openGraphMeta = require('open-graph-meta')
var openGraphTags = require('open-graph-meta/tags')

var data = {
  title: 'The Title',
  image: {
    url: 'image.jpg'
  }
}

openGraphMeta(data)
//=> {'og:title': 'The Title', 'og:image:url': 'image.jpg'}

openGraphTags(data)
//=> [{property: 'og:title', content: 'The Title'}, {property: 'og:image:url', content: 'image.jpg'}]
```

## API

#### `openGraphMeta(data)` -> `object`

##### data

*Required*  
Type: `object`

An object with [Open Graph](http://ogp.me/) data. The data can be nested. The final result will be flattened with a colon as the delimeter.

#### `openGraphTags(data)` -> `array[object]`

##### data

*Required*  
Type: `object`

An object with [Open Graph](http://ogp.me/) data. The data is first passed through `openGraphMeta` and then transformed into an array of `{property, content}` meta objects.


## License

MIT © [Ben Drucker](http://bendrucker.me)
