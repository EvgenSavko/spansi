import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MarsRoverList.css';

import { getMarsRovers } from './../../actions/mars.js';

class MarsRoverList extends Component {
  componentDidMount() {
    const { mars } = this.props;
    if (mars.length < 1) this.props.getMarsRovers();
  }

  render() {
    return (
      <div className="mars_rover_list">
        <h2>List rovers</h2>
        <div className="accordion">
          <ul>
            <li
              tabIndex="1"
              style={{
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mars_Spirit.jpg/800px-Mars_Spirit.jpg")',
              }}
            >
              <div>
                <div className="div_a">
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </li>
            <li
              tabIndex="2"
              style={{
                backgroundImage:
                  'url("https://www.sciencenews.org/sites/default/files/2017/08/main/articles/080417_curiosity_selfie_free.jpg")',
              }}
            >
              <div>
                <div className="header_title">
                  <h2>Lorem Ipsum2</h2>
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
            <li
              tabIndex="3"
              style={{
                backgroundImage: `url("${require('../../act/image/Mars_Spirit.jpg')}")`,
              }}
            >
              <div>
                <div className="header_title">
                  <h2>Lorem Mars_Spirit</h2>
                </div>
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
    mars: state.mars,
  }),
  { getMarsRovers }
)(MarsRoverList);
