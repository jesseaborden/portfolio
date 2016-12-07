import React, { Component } from 'react';
import {Link} from 'react-router'
import Navbar from './Navbar.js';

class Home extends Component {
  render() {
    return (
      <div className="container" id="home">
        <Navbar />
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1" id="home-body"> 
            <p id="about-jesse">I'm Jesse and I'm a full-stack developer based in Los Angeles</p>
            <p id="projects">Recent Projects: <br />
              <Link to="/typedash" id="teachin-link">Teach.in</Link>,&nbsp; 
              <Link to="/typedash" id="typedash-link">Typedash</Link>, &nbsp;
              <Link to="/typedash">Coco</Link>,&nbsp; 
              <Link to="/typedash">POL</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;