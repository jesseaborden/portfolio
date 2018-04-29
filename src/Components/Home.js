import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router'
import Navbar from './Navbar.js';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid nav">
          <Navbar />
        </div>
        <div className="container" id="home">
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionEnter={false}
        transitionLeave={false}>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-11 col-md-offset-1 col-sm-12" id="home-body">
              <p id="about-jesse">I'm Jesse and I'm a front-end developer based in San Francisco.</p>
              <p id="projects">Recent Projects: <br />
                <span id="home-links">
                  <Link to="/teachin" id="teachin-link">Teach.in</Link>,&nbsp;
                  <Link to="/typedash" id="typedash-link">Typedash</Link>, &nbsp;
                  <Link to="/coco" id="coco-link">Coco</Link>,&nbsp;
                  <Link to="/pol" id="pol-link">POL</Link>&nbsp;
                  <span>and this portfolio</span>
                </span>
              </p>
            </div>
          </div>
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Home;
