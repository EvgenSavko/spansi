import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MarsRoverList.css';

import { getMarsRovers } from './../../actions/mars.js';

class MarsRoverList extends Component {
  componentDidMount() {
    // const { apod } = this.props;
    // console.log('apod.length', apod.length);
    this.props.getMarsRovers();
  }

  render() {
    return (
      <div className="mars_rover_list">
        <h2>List rovers</h2>
        <div className="accordion">
          <ul>
            <li
              tabIndex="1"
              style={{ backgroundImage: 'url("http://michael-ferry.com/assets/accordion1.jpg")' }}
            >
              <div>
                <div className="div_a">
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </li>
            <li tabIndex="2">
              <div>
                <div className="header_title">
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="div_a">
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <br />
                </div>
              </div>
            </li>
            <li tabIndex="3">
              <div>
                <div className="div_a">
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </li>
            <li tabIndex="4">
              <div>
                <div className="div_a">
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    // apod: state.apod,
  }),
  { getMarsRovers }
)(MarsRoverList);
