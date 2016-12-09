import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import polHero from '../../public/assets/POLHero@2x.png';
import ProjectImage from '../../public/assets/POL_Screenshots@2x.png';
import polCode from '../../public/assets/polCode.png'
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Pol = () => (
	<div>
		<div className="container-fluid nav">
			<Navbar />
		</div>
		<ReactCSSTransitionGroup
	      transitionName="example"
	      transitionAppear={true}
	      transitionAppearTimeout={2000}
	      transitionEnter={false}
	      transitionLeave={false}>
			<div className="container">
				<div className="project-row row">
					<div className="project-description col-lg-6 col-md-7 col-sm-9">
						<h1>POL</h1>
						<p>
							At Pacific Outdoor Living I worked as the lead front-end developer which included managing and developing all of POL's extensive web properties. 
							This included legacy projects as well as developing new websites for campaigns, microsites, and web optimization.
						</p>
					</div>
					<div className="project-image col-lg-5 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-3">
						<img id="pol-hero" src={polHero} role="presentation"/>
					</div>
				</div>
			</div>
			<div className="feature-row row">
				<img src={ProjectImage} role="presentation"/>
			</div>
			<div className="container">
				<div className="code-row row">
					<div className="code-description col-lg-6">
						<p>
							My stack here included PHP, Wordpress, HTML, CSS, and Javascript.
						</p>
					</div>
					<div className="code-image col-lg-6">
						<img src={polCode} role="presentation"/>
					</div>
				</div>
			</div>
			<Footer next={'/'} previous={'/coco'} />
			</ReactCSSTransitionGroup>
	</div>
)

export default Pol;