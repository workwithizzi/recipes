
## `<Skiplink>` Component

Creates a `<a>` tag that can be used by keyboard users to skip to the main content of the page. Primarily for accessibility.

Example:

```js
	<body>
		<Skiplink />
		// Header, main, etc
	</body>
```

or

```js
	<body>
		<Skiplink to="main" label="Skip content" />
		// Header, main, etc
	</body>
```

### Implementation
Uses `SASS` modules but can easily be changed to use a different form of bringing in the `css`. I usually add this component inside my `<Layout>` component just below where the document `<head>` would be.

### Dependencies
	- `yarn add `prop-types`

### Proptypes
- to: Optional. This would be the `id` of the container for the main page-content. Defaults to `#scroll-main`.
- label: Optional. This is the text that appears inside the tag. Defaults to `Jump to main content.`.