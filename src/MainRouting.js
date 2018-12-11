import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Mars from './screens/Mars';

class MainRouting extends Component {
  state = {
    hh: 0,
    hf: 0,
    hd: 0,
    main: 0,
  };

  componentDidMount() {
    const header = document.getElementsByTagName('header');
    const footer = document.getElementsByTagName('footer');
    const html = document.getElementsByTagName('html');
    const hh = header[0].clientHeight;
    const hf = footer[0].clientHeight;
    const hd = html[0].clientHeight;
    const main = hd - hf - hh - 37;
    console.log('header', hh);
    console.log('footer', hf);
    console.log('document', hd);
    if (hh !== this.state.hh) this.setState({ hh });
    if (hf !== this.state.hf) this.setState({ hf });
    if (hd !== this.state.hd) this.setState({ hd });
    if (main !== this.state.main) this.setState({ main });
  }

  resize() {
    window.addEventListener('resize', () => {
      const header = document.getElementsByTagName('header');
      const footer = document.getElementsByTagName('footer');
      const html = document.getElementsByTagName('html');
      const hh = header[0].clientHeight;
      const hf = footer[0].clientHeight;
      const hd = html[0].clientHeight;
      const main = hd - hf - hh - 37;
      console.log('header', hh);
      console.log('footer', hf);
      console.log('document', hd);
      if (hh !== this.state.hh) this.setState({ hh });
      if (hf !== this.state.hf) this.setState({ hf });
      if (hd !== this.state.hd) this.setState({ hd });
      if (main !== this.state.main) this.setState({ main });
    });
  }

  render() {
    this.resize();
    console.log('document', this.state.main);
    return (
      <main style={{ minHeight: this.state.main }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Mars" component={Mars} />
        </Switch>
      </main>
    );
  }
}

export default MainRouting;
