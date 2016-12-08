import React from 'react'
import { Link } from 'react-router';

export default () => (
	<nav>
		<Link to="/" id="nav-home"> <h1>Jesse Borden</h1> </Link>
		<ul className="desktop-nav">
			<li><span>Github: </span><a href="https://github.com/jesseaborden"> github.com/jesseaborden </a></li>
			<li><span>Linkedin: </span><a href="https://linkedin.com/in/jesse-borden"> linkedin.com/in/jesse-borden </a></li>
			<li><span>Email: </span><a href="mailto:jesseaborden@gmail.com">jesseaborden@gmail.com</a></li>
		</ul>
		<ul className="mobile-nav">
			<li><a href="https://github.com/jesseaborden"> Github </a></li>
			<li><a href="https://linkedin.com/in/jesse-borden"> Linkedin </a></li>
			<li><a href="mailto:jesseaborden@gmail.com"> Email </a></li>
		</ul>
	</nav>
)