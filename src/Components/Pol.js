import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import teachinHero from '../../public/assets/Teachinhero@2x.png';
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
							Teach.in is a prototype two friends and I made to help ease the adminstrative 
							burden of educators. We are still updating it regularly and hope to get it in 
							the hands of some mind molders shortly. 
						</p>
					</div>
					<div className="project-image col-lg-5 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-3">
						<img src={teachinHero} role="presentation"/>
					</div>
				</div>
			</div>
			<div className="feature-row row">
				<img src={ProjectImage} role="presentation"/>
			</div>
			<div className="container-fluid">
				<div className="code-row row">
					<div className="code-description col-lg-5 col-lg-offset-1">
						<p>
							I was in a full stack role on Teach.in. My stack included React, Redux, Node, 
							Express, Postgresql, and Sequilize. 
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