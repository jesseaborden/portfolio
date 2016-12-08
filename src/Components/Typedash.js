import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TypeDash from '../../public/assets/TypedashHero@2x.png';
import ProjectImage from '../../public/assets/Project_Screenshots@2x.png';
import TypedashCode from '../../public/assets/typedashCode.png'
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Typedash = () => (
	<div>
		<div className="container-fluid nav">
			<Navbar />
		</div>
		<ReactCSSTransitionGroup
	      transitionName="example"
	      transitionAppear={true}
	      transitionAppearTimeout={500}
	      transitionEnter={false}
	      transitionLeave={false}>
			<div className="container">
				<div className="project-row row">
					<div className="project-description col-lg-6 col-md-7 col-sm-9">
						<h1>Typedash</h1>
						<p>
							Typedash is a chrome extension that allows users to make notes, read news, jump to social
							sites while maintaining a focus on typography and color. My role on this proect was building
							the app's front-end and marketing site. 
						</p>
					</div>
					<div className="project-image col-lg-5 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-3">
						<img src={TypeDash} role="presentation"/>
					</div>
				</div>
			</div>
			<div className="feature-row row">
				<img src={ProjectImage} role="presentation"/>
			</div>
			<div className="container-fluid">
				<div className="code-row row">
					<div className="code-description col-lg-5 col-lg-offset-1">
						<p>I used HTML, CSS and Javascript/jQuery to create Typedash's front-end.
						</p>
					</div>
					<div className="code-image col-lg-6">
						<img src={TypedashCode} role="presentation"/>
					</div>
				</div>
			</div>
			<Footer next={'/coco'} previous={'/teachin'}/>
			</ReactCSSTransitionGroup>
	</div>
)

export default Typedash;