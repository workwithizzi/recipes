// Accessibility Skiplink
import React from "react"
import PropTypes from "prop-types"
import css from "./Skiplink.module.sass"


export function Skiplink({ to, label }) {
	return (
		<a className={css.container} href={to}>
			{/* Jump to main content. */}
			{label}
		</a>
	)
}

Skiplink.defaultProps = {
	to: `#scroll-main`,
	label: `Jump to main content.`,
}

Skiplink.prototypes = {
	to: PropTypes.string,
	label: PropTypes.string,
}
