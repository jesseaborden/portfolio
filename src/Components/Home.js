import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <p>I'm Jesse and I'm a full-stack developer based in Los Angeles</p>
        <p>Recent Projects:
          <a href="#" id="teachin-link">Teach.in</a>,
          <a href="#" id="typedash-link">Typedash</a>
        </p>
      </div>
    );
  }
}

export default Home;