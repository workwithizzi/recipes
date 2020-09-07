import React from "react"
import PropTypes from "prop-types"

import css from "./Hide.module.sass"

export function Hide({ children }) {
	return (
		<span className={css.hide}>
			{children}
		</span>
	)
}


Hide.prototypes = {
	children: PropTypes.node.isRequired,
}
