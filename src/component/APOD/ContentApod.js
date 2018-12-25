import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAPOD } from './../../actions/apod.js';

class ContentApod extends Component {
  state = {
    date: [],
  };

  componentDidMount() {
    this.props.getAPOD();
    this.setState({
      date: this.props.apod,
    });
  }

  render() {
    console.log('state', this.state);
    console.log('props', this.props);
    return (
      <div style={{ color: 'white' }}>
        <p>
          Apod <span> go moon </span>
        </p>
        {this.props.apod.length && this.props.apod.map(item => <p key={item.date}>{item.date}</p>)}
      </div>
    );
  }
}

export default connect(
  state => ({
    apod: state.apod,
  }),
  // dispatch => {
  //   return {
  //     getAPOD2: () => dispatch(getAPOD()),
  //   };
  // }
  { getAPOD }
)(ContentApod);
