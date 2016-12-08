import React from 'react';
import { Link } from 'react-router';

export default  (props) => (
	<footer>
		<Link to="/" className="project-link previous-link">Previous Project</Link>
		<Link to="/" className="project-link next-link">Next Project</Link>
	</footer>
)
