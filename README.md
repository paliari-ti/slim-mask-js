## A lightweight mask for JavaScript

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
	    '**': { pattern: /\d/ },
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

`$yarn install` or `$ npm install`

- Build

`$yarn dist` or `$ npm run dist`

### Authors

- Felipe Bohnert Paetzold <felipe.paetzold@gmail.com>
