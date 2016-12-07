import React from 'react';
import Navbar from './Navbar.js';

const Typedash = () => (
	<div>
		<Navbar />
		<div className="project-row">
			<div className="project-description">
				<h1>Typedash</h1>
				<p>
					Typedash is a chrome extension that allows users to make notes, read news, jump to social
					sites while maintaining a focus on typography and color. My role on this proect was building
					the app's front-end and marketing site. 
				</p>
			</div>
			<div className="project-image">
				<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Kong33promo.jpg/280px-Kong33promo.jpg' role="presentation"/>
			</div>
		</div>
		<div className="feature-row">
			<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Kong33promo.jpg/280px-Kong33promo.jpg' role="presentation"/>
		</div>
		<div className="code-row">
			<div className="code-description">
				<p>Teach.in is an education management platform I built with two friends of mine. 
				My role was database management and frontend. Our stack was React, SQL, Javascript,
				and something else.</p>
			</div>
			<div className="project-image">
				<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Kong33promo.jpg/280px-Kong33promo.jpg' role="presentation"/>
			</div>
		</div>
	</div>
)

export default Typedash;