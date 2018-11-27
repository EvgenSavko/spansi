import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Equalizer from '../equalizer/Equalizer';

class Header extends Component {
  render() {
    return (
      <div className="block_header">
        <div className="content">
          <div className="row">
            <div className="left">
              <Link to={`/`}>
                <h5>SPANSI</h5>
              </Link>
            </div>
            <div className="center">
              <div>
                <h5>Sing in</h5>
              </div>
              <div>
                <h5>About</h5>
              </div>
            </div>
            <div className="right">
              <Equalizer />
              <div>
                <h5>23:22</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
