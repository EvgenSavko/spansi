import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="block_header">
        <div className="content">
          <div className="row">
            <div className="left">
              <h4>SPANSI</h4>
            </div>
            <div className="center">
              <div>
                <h5>Sing in</h5>
              </div>
              <div>
                <h5>about</h5>
              </div>
            </div>
            <div className="right">
              <div>
                <h4>.|œ0|</h4>
              </div>
              <div>
                <h4>23:22</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
