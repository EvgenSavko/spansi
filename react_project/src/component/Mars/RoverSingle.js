import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RoverSingle extends Component {
  render() {
    console.log('params', this.props.match.params.rover);
    return (
      <div style={{ color: 'white' }}>
        <h1>{this.props.match.params.rover}</h1>

        <Link to="/MARS/">
          <h3>Close</h3>
        </Link>
      </div>
    );
  }
}

export default RoverSingle;
