import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import teachinHero from '../../public/assets/Teachinhero@2x.png';
import ProjectImage from '../../public/assets/Project_Screenshots@2x.png';
import TeachinCode from '../../public/assets/teachinCode.png'
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Teachin = () => (
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
						<h1>Teach.in</h1>
						<p>
							Teach.in is an educational managment platform that two friends and I developed over
							the course of the last few months. Teach.in will be available for Beta in early January 2017.
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
			<div className="container">
				<div className="code-row row">
					<div className="code-description col-lg-6">
						<p>
							My role on this project was full stack and included React, Redux, CSS, Node, Express, Postgresql and Sequilize. 
						</p>
					</div>
					<div className="code-image col-lg-6">
						<img src={TeachinCode} role="presentation"/>
					</div>
				</div>
			</div>
			<Footer next={'/typedash'} previous={'/'} />
			</ReactCSSTransitionGroup>
	</div>
)

export default Teachin;