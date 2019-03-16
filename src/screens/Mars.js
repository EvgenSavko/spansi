import React, { Component } from 'react';

import './Mars.css';

import TitlePage from '../component/page-markup/TitlePage';
import MarsRoverList from '../component/Mars/MarsRoverList';

class Mars extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="background_mars">
          <div />
          <div />
        </div>

        <div className="content">
          <TitlePage name="Rovers on Mars" />
          <div style={{ marginTop: '15px' }} />
          <MarsRoverList />
        </div>
      </div>
    );
  }
}

export default Mars;
