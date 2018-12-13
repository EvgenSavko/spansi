import React, { Component } from 'react';
import './Mars.css';

class Mars extends Component {
  state = {
    minHeight: '0px',
  };

  componentDidMount() {
    const root = document.getElementById('root');
    this.setState({ minHeight: root.clientHeight });
  }

  render() {
    return (
      <div className="_mars">
        <div className="background_mars">
          <div style={{ minHeight: 66 + this.state.minHeight + 'px' }} />
          <div style={{ minHeight: 66 + this.state.minHeight + 'px' }} />
        </div>

        <div className="content" style={{ minHeight: this.state.minHeight + 'px' }}>
          <h2>Mars</h2>
          <p>Roveer</p>
          <h2>Home</h2>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
          <p>
            Mars <span> go mars</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Mars;
