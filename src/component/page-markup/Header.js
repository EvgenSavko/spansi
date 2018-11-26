import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="block_header">
        <div className="content">
          <div className="row">
            <div className="left">
              <h5>SPANSI</h5>
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
              <div>
                <h5>.|œ0|</h5>
              </div>
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
