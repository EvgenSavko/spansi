import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Equalizer from '../equalizer/Equalizer';
import Clock from '../clock/Clock';

class Header extends Component {
  resize() {
    window.addEventListener('scroll', () => {
      let scrollHeight = document.documentElement.scrollTop;
      if (scrollHeight > 20) this.head.classList.add('scroll_down');
      else this.head.classList.remove('scroll_down');
    });
  }

  render() {
    this.resize();
    return (
      <header
        className="block_header"
        ref={element => {
          this.head = element;
        }}
      >
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
              <div>
                <Equalizer />
              </div>
              <div>
                <Clock />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
