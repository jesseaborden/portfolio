import React from 'react';
import Navbar from './Navbar.js';

const Typedash = () => (
	<div>
		<div className="container">
			<Navbar />
		</div>
		<div className="container">
			<div className="project-row row">
				<div className="project-description col-lg-6">
					<h1>Typedash</h1>
					<p>
						Typedash is a chrome extension that allows users to make notes, read news, jump to social
						sites while maintaining a focus on typography and color. My role on this proect was building
						the app's front-end and marketing site. 
					</p>
				</div>
				<div className="project-image col-lg-6">
					<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Kong33promo.jpg/280px-Kong33promo.jpg' role="presentation"/>
				</div>
			</div>
		</div>
		<div className="feature-row row">
			<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Kong33promo.jpg/280px-Kong33promo.jpg' role="presentation"/>
		</div>
		<div className="container-fluid">
			<div className="code-row row">
				<div className="code-description col-lg-5 col-lg-offset-1">
					<p>Teach.in is an education management platform I built with two friends of mine. 
					My role was database management and frontend. Our stack was React, SQL, Javascript,
					and something else.</p>
				</div>
				<div className="project-image col-lg-6">
					<img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Kong33promo.jpg/280px-Kong33promo.jpg' role="presentation"/>
				</div>
			</div>
		</div>
	</div>
)

export default Typedash;