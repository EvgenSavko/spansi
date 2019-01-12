import React, { Component } from 'react';

import './Home.css';
import TitlePage from '../component/page-markup/TitlePage';
import ComponentAPOD from '../component/APOD/ContentApod';

class Home extends Component {
  state = {
    isShow: true,
  };

  componentDidMount() {
    if (sessionStorage.getItem('first_loader') === 'true') {
      this.setState({ isShow: false });
    } else {
      setTimeout(() => {
        sessionStorage.setItem('first_loader', 'true');
        this.setState({ isShow: false });
      }, 5000);
    }
  }

  render() {
    return (
      <div>
        <div className="background_home">
          <div />
          <div />
        </div>

        <div className="content" style={{ minHeight: this.state.minHeight + 'px' }}>
          <TitlePage name="Astronomy Picture of the Day" />
          <div style={{ marginTop: '10px' }} />
          <ComponentAPOD />
        </div>

        {this.state.isShow && (
          <div className="first_loader">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="title">
              <span>you are welcome</span>
              <br />
              <span>to SPANSI</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
