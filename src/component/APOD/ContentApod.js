import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment } from '../../actions/AC';

class ContentApod extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props);
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
  }),
  { increment }
)(ContentApod);
