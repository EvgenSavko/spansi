import React, { Component } from 'react';
import './Mars.css';
import TitlePage from '../component/page-markup/TitlePage';

class Mars extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="_mars">
        <div className="background_mars">
          <div />
          <div />
        </div>

        <div className="content" style={{ minHeight: this.state.minHeight + 'px' }}>
          <TitlePage name="Rovers on Mars" />
          <p>Roveer</p>
        </div>
      </div>
    );
  }
}

export default Mars;
