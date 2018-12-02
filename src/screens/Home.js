import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  state = {
    isShow: true,
  };

  componentDidMount() {
    console.log(sessionStorage.getItem('first_loader'));
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

        <div className="content">
          <h2>Home</h2>
          <p>
            Apod <span> go moon</span>
          </p>
        </div>
        {this.state.isShow && (
          <div className="first_loader">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="title">
              <span>YOU ARE WELCOME</span>
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
