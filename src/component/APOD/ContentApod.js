import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment } from './../../actions/increment';
import { getAPOD } from './../../actions/apod.js';

class ContentApod extends Component {
  componentDidMount() {
    console.log();
    this.props.increment(5);
    this.props.getAPOD();
  }

  render() {
    console.log('state', this.props);
    return (
      <div>
        <p>
          Apod <span> go moon 1212312</span>
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({
    counter: state.count,
    apod: state.apod,
  }),
  { increment, getAPOD }
)(ContentApod);
