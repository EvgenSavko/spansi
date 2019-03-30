import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MarsRoverList.css';
import Load from '../Loader/Loader';

import { getMarsRovers } from './../../store/actions/mars';

class MarsRoverList extends Component {
  componentDidMount() {
    const { mars } = this.props;
    if (mars.length < 1) this.props.getMarsRovers();
  }

  renderLi() {
    const { mars } = this.props;
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
            <h2>{item.name}</h2>
            <div style={{ marginTop: '14px' }} />
            <div className="row">
              <div className="col">
                <p>Status: {item.status} </p>
              </div>

              <div className="col">
                <p>Total Photos: {item.total_photos}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Launch Date: {item.launch_date}</p>
              </div>
              <div className="col">
                <p>Landing Date: {item.landing_date}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Max Date: {item.max_date}</p>
              </div>
              <div className="col">
                <p>Max Sol: {item.max_sol}</p>
              </div>
            </div>

            <div style={{ marginTop: '14px' }} />
            <p>Cameras:</p>
            {this.listCamers(item.cameras)}
          </div>
        </div>
      </li>
    ));
  }

  listCamers(arr) {
    return arr.map(cam => (
      <div key={cam.name} className="row">
        <div className="col" style={{ width: '100%' }}>
          <p>{cam.full_name}</p>
        </div>
      </div>
    ));
  }

  render() {
    const { mars } = this.props;
    return (
      <div>
        {mars.length === 0 && <Load />}
        {mars.length > 0 && (
          <div className="mars_rover_list">
            <div className="accordion">
              <ul>{this.renderLi()}</ul>
            </div>
          </div>
        )}
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
