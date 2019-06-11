# Next.js + ESX

Enable [`esx`](https://github.com/esxjs/esx) in your Next.js project

## Status

Experimental

## Installation

```
npm install --save next-esx
```

or

```
yarn add next-esx
```

### Configuring Next.js

```js
// next.config.js
const withEsx = require('next-esx')()
module.exports = withEsx()
```

If you need to set extra config options

```js
// next.config.js
const withEsx = require('next-esx')()
module.exports = withEsx({
  // set more options 
  webpack(config, options) {
    // do extra things
    return config
  }
})
```

### Configuring `package.json`

Make sure esx is installed:

```sh
npm install esx
```

Change the `start` script in your `package.json` from:

```json
  "start": "next start"
```

To:

```json
  "start": "next-esx start"
```

## License

MIT