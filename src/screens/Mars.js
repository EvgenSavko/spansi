import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './Mars.css';

import TitlePage from '../component/page-markup/TitlePage';
import MarsRoverList from '../component/Mars/MarsRoverList';
import RoverSingle from './RoverSingle';

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
          <Switch>
            <Route path="/Mars/:rover" component={RoverSingle} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Mars;
