import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router'
import Navbar from './Navbar.js';

class Home extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="container" id="home">
        <Navbar />
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-11 col-md-offset-1 col-sm-12" id="home-body"> 
            <p id="about-jesse">I'm Jesse and I'm a full-stack developer based in Los Angeles.</p>
            <p id="projects">Recent Projects: <br />
              <Link to="/typedash" id="teachin-link">Teach.in</Link>,&nbsp; 
              <Link to="/typedash" id="typedash-link">Typedash</Link>, &nbsp;
              <Link to="/typedash" id="coco-link">Coco</Link>,&nbsp; 
              <Link to="/typedash" id="pol-link">POL</Link>
            </p>
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;