// Link component to use in place of Gatsby's <Link>

import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"


export function Link({to, label, children, ...props}) {
	if (to.startsWith(`/`)) {
		return (
			<GatsbyLink to={to} {...props}>
				{label || children}
			</GatsbyLink>
		)
	} else {
		return (
			<a href={to} {...props}>
				{label || children}
			</a>
		)
	}
}


Link.prototypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string,
	children: PropTypes.node,
}
