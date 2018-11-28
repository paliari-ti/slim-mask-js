## A lightweight mask for JavaScript

### Install

- With npm

`npm install slim-mask-js`

- With yarn (we <3 yarn)

`yarn add slim-mask-js`

### Simple example using ES6

```
import mask from 'slim-mask-js'

mask('44999999999', '(##) # ####-####')
// (44) 9 9999-9999
```

### Mask with custom tokens

```
import { maskit } from 'slim-mask-js'

const tokens = {
  '*': { pattern: /\d/ },
  X: { pattern: /[0-9a-zA-Z]/ },
  S: { pattern: /[a-zA-Z]/ },
  A: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase() },
  a: { pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase() },
  '!': { escape: true }
}

mask('44999999999', '(**) * ****-****')
// (44) 9 9999-9999
```

### In browser

```
const mask = require('slim-mask-js').default
const maskit = require('slim-mask-js).maskit
```

### Development

- Install dependencies:

`$yarn install` or `$npm install`

- Build

`$yarn dist` or `$npm run dist`

- Test

`$yarn test` or `$npm run test`

### Authors

- Felipe Bohnert Paetzold <felipe.paetzold@gmail.com>
