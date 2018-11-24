import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <h4>Footer</h4>
        <Link to={`/`}>
          <span>home |</span>
        </Link>
        <Link to={`/Mars`}>
          <span>| mars</span>
        </Link>
      </div>
    );
  }
}

export default Footer;
