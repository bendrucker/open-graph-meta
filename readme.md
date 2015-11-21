# open-graph-meta [![Build Status](https://travis-ci.org/bendrucker/open-graph-meta.svg?branch=master)](https://travis-ci.org/bendrucker/open-graph-meta)

> Generate Open Graph meta tags


## Install

```
$ npm install --save open-graph-meta
```


## Usage

```js
var openGraphMeta = require('open-graph-meta')

openGraphMeta({
  title: 'The Title',
  image: {
    url: 'image.jpg'
  }
})
//=> {'og:title': 'The Title', 'og:image:url': 'image.jpg'}
```

## API

#### `openGraphMeta(data)` -> `object`

##### data

*Required*  
Type: `object`

An object with [Open Graph](http://ogp.me/) data. The data can be nested. The final result will be flattened with a colon as the delimeter.


## License

MIT © [Ben Drucker](http://bendrucker.me)
