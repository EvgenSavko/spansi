import React, { Component } from 'react';
import MainRouting from './MainRouting';
import Header from './component/Header';
import Footer from './component/Footer';
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
