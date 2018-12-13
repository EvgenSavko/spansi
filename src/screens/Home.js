import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  state = {
    isShow: true,
    minHeight: '0px',
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
    const root = document.getElementById('root');
    this.setState({ minHeight: root.clientHeight });
  }

  render() {
    return (
      <div>
        <div className="background_home">
          <div style={{ minHeight: 66 + this.state.minHeight + 'px' }} />
          <div style={{ minHeight: 66 + this.state.minHeight + 'px' }} />
        </div>

        <div className="content" style={{ minHeight: this.state.minHeight + 'px' }}>
          <h2>Home</h2>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
          <p>
            Apod <span> go moon</span>
          </p>
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
