import React, { Component } from 'react';
import MainRouting from './MainRouting';
import { Header, Footer } from './component/page-markup';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainRouting />
        <Footer />
      </div>
    );
  }
}

export default App;
