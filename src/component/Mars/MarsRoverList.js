import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MarsRoverList.css';

import { getMarsRovers } from './../../actions/mars.js';

class MarsRoverList extends Component {
  componentDidMount() {
    const { mars } = this.props;
    if (mars.length < 1) this.props.getMarsRovers();
  }

  renderLi() {
    const { mars } = this.props;
    console.log(mars);
    return mars.map((item, index) => (
      <li
        key={item.name}
        tabIndex={index + 1}
        style={{
          backgroundImage: `url(${require('../../' +
            (item.src ? item.src : 'act/image/not_photo.jpg'))})`,
        }}
      >
        <div>
          <div className="header_title">
            <h2>{item.name}</h2>
          </div>
          <div className="div_a">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="mars_rover_list">
        <h2>List rovers</h2>
        <div className="accordion">
          <ul>{this.renderLi()}</ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    // apod: state.apod,
    mars: state.mars,
  }),
  { getMarsRovers }
)(MarsRoverList);
