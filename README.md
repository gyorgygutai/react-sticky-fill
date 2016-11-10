# react-sticky-fill

A ReactJS wrapper for position:sticky elements using the [Stickyfill](https://github.com/wilddeer/stickyfill) polyfill.

## Installation

It can be installed as an [npm package](https://www.npmjs.org/package/react-sticky-fill):

```bash
$ npm install --save react-sticky-fill
```

## Basic usage

You just import the `Sticky` component and pass your content as the single child:

```js
import React from 'react'
import Sticky from 'react-sticky-fill'

(
	<Sticky>
		<MyComponent>Hey, I am sticky!</MyComponent>
	</Sticky>
)
```

The necessary css is `inlined`, the polyfill is automatically added on mount.
If you want to override `top (default: 0)` (or any other css property), you can do so by passing a `className` or through `style`.

```js
import React from 'react'
import Sticky from 'react-sticky-fill'

(
	<Sticky className="my-custom-sticky">
		I stick
	</Sticky>
)

(
	<Sticky style={{top: '15px'}}>
		I stick too
	</Sticky>
)
```


The component passes through every other prop besides the ones shown above.

## Further reading

- [position:sticky](http://caniuse.com/#feat=css-sticky) on caniuse.com
- [Stickyfill](https://github.com/wilddeer/stickyfill)
