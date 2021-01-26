import React from "react"
import Authentication from './Authentication'

import Typography from '@material-ui/core/Typography';

const Header = ({ setUserId }) => {
	return (
		<nav className="header">
			{/* THIS IS HOW TO COMMENT IN JSX*/}
			<Authentication setUserId={setUserId} />
			<div className="headerText" >
				<Typography
					variant="h1"
					component="h2"
					gutterBottom
				> Todo List
				</Typography>
			</div>
		</nav>
	)
}

export default Header