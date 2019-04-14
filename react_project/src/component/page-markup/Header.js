import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Equalizer from '../equalizer/Equalizer';
import Clock from '../clock/Clock';

class Header extends Component {
  componentDidMount() {
    this.callBackendAPIMongo()
      .then(res => console.log('node bekend callBackendAPIMongo', res))
      .catch(err => console.log(err));
  }

  postTest = async () => {
    let obj = {
      name: 'Tomas',
      password: '123',
      email: 'senya@seasd',
      first_name: 'Joy',
      second_name: 'Boy',
      phone: '911',
    };
    console.log(obj);
    fetch('/notes', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Origin': '*',
      },
    }).catch(err => console.log(err));
  };

  callBackendAPIMongo = async () => {
    const response = await fetch('/notes');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

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
                <h5
                  onClick={() => {
                    this.postTest();
                  }}
                >
                  About
                </h5>
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
