import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAPOD } from './../../actions/apod.js';

class ContentApod extends Component {
  componentDidMount() {
    this.props.getAPOD();
  }

  render() {
    console.log('props', this.props);
    const { date } = this.props.apod[0];
    return (
      <div style={{ color: 'white' }}>
        <p>
          Apod <span> go moon {date}</span>
        </p>
        {/* {this.props.apod.length && this.props.apod.map(item => <p key={item.date}>{item.date}</p>)} */}
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
