
## `<Hide>` Component

Creates a `<span>` tag that can be used to make the content inside it hidden for visual users but still available to screen readers.

Example:

```js
	<button>
		Open <Hide>Menu</Hide>
	</button>
```

### Implementation
Uses `SASS` modules but can easily be changed to use a different form of bringing in the `css`.

### Dependencies
	- `yarn add `prop-types`

	- Gatsby:
		- `yarn add gatsby-plugin-sass`
		- In the `gatsby-config.js` make sure you include `gatsby-plugin-sass` in the `plugins` array.

### Proptypes
Does not accept proptypes.