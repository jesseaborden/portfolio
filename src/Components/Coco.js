import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cocoHero from '../../public/assets/Coco_Hero@2x.png';
import ProjectImage from '../../public/assets/Coco_Screenshots@2x.png';
import CocoCode from '../../public/assets/cocoCode.png'
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Coco = () => (
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
						<h1>Coco</h1>
						<p>
							I created a landing page for song writter Coco to showcase his records. Using full width
							video rollovers and embeded Soundcloud players.
						</p>
					</div>
					<div id="coco-hero" className="project-image col-lg-5 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-3">
						<img src={cocoHero} role="presentation"/>
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
							I used HTML, CSS, Javascript and jQuery to build the site.
						</p>
					</div>
					<div className="code-image col-lg-6">
						<img src={CocoCode} role="presentation"/>
					</div>
				</div>
			</div>
			<Footer next={'/pol'} previous={'/typedash'} />
			</ReactCSSTransitionGroup>
	</div>
)

export default Coco;