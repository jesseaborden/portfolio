import React from 'react';
import { Link } from 'react-router';

export default  (props) => {
	return (
		<footer>
			<Link to={props.previous} className="project-link previous-link">Previous Project</Link>
			<Link to={props.next} className="project-link next-link">Next Project</Link>
		</footer>
		)
}
