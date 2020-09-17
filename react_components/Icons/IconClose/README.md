
## `<IconClose>` Component

Used to add an `svg` inline that represents "close" (the "X") in many menu UIs. This is a basic icon from [Font-Awesome](https://fontawesome.com/icons/times?style=solid).

![Close Icon Image](./times-solid.svg)

Example:

```js
	<IconClose />
```

### Implementation
Does not include any styling other than the `svg` design.

### Dependencies
	- `yarn add `prop-types`

### Proptypes
- `fillColor`:
	- Accepts any color as a string. Defaults to `currentColor`.
- `title`:
	- Creates the `<title>` tag for the `<svg>`.
- `titleId`:
	- Used as the `id` attribute for `<title>` Defaults to `IconCloseId`.
- `desc`:
	- Creates the `<desc>` tag for the `<svg>`.
- `focusable`:
	- Used as the `focusable` attribute for the `<svg>`. Defaults to `true`.
- `role`:
	- Used as the `role` attribute for the `<svg>`. Defaults to `img`.
- `ariaHidden`:
	- Used as the `aria-hidden` attribute for the `<svg>`. Defaults to `true`.
- `className`:
	- Used as the `className` attribute for the `<svg>`.
- `...props`:
	- Passes all other props on to the `<svg>`.
