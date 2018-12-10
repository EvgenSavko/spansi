import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Mars from './screens/Mars';

class MainRouting extends Component {
  render() {
    return (
      <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Mars" component={Mars} />
      </Switch>
      </main>
    );
  }
}

export default MainRouting;
