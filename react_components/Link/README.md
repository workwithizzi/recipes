
## `<Skiplink>` Component

Can be used on Gatsby projects to replace the use of Gatsby's own `<Link>` component. For "local" links, it will use Gatsby's <Link> and for external links, it will fall back to using a regular `<a>` tag.

Example:

```js
	<p>Visit our <Link to="/blog">Blog</Link>!</p>
	<p>Visit our Facebook page <Link to="facebook.com" label="here." /></p>
```

### Implementation
Does not include any styling but passes any proptype through so you can include your own `className` or `style` props.

### Dependencies
	- `yarn add `prop-types`
	- Gatsby.js

### Proptypes
- to:
	- This would be the `href` of an `<a>` tag or the normal `to` or Gatsby's `<Link>`.
	- Required.
- label:
	- This is the text that appears inside the tag.
	- Optional--Can be used in place of `children` prop.
- children:
	- This is the text that appears inside the tag.
	- Optional--Can be used in place of the `label` prop.
- ...props:
	- Passes all other props on to the `<Link>` or `<a>`.