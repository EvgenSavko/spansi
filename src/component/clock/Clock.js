import React, { Component } from 'react';

class Clock extends Component {
  state = {
    clock: '00:00',
  };

  setTimer = () => {
    const time = new Date();
    const hh = time.getHours();
    let mm = time.getMinutes();
    mm = mm.toString().length < 2 ? `0${mm}` : mm;
    if (this.state.clock !== `${hh}:${mm}`) this.setState({ clock: `${hh}:${mm}` });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTimer();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // setInterval(() => {
    //   this.setTimer();
    // }, 1000);
    return <h5>{this.state.clock}</h5>;
  }
}

export default Clock;
