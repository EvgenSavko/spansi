import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ContentApod.css';
import { getAPOD } from './../../actions/apod.js';

class ContentApod extends Component {
  componentDidMount() {
    const { apod } = this.props;
    console.log('apod.length', apod.length);
    if (apod.length === 1) this.props.getAPOD();
  }

  render() {
    console.log('props', this.props);
    const { url, title, explanation } = this.props.apod[0];
    return (
      <div style={{ color: 'white', border: '1px solid red' }}>
        {/* <p>
          Apod <span> go moon {date}</span>
        </p> */}
        <div className="row red">
          <div className="img_apod red">
            <div className="image" style={{ backgroundImage: `url(${url})` }} />
          </div>
          <div className="article_apod red">
            <div className="title_article">
              <h2>{title}</h2>
            </div>
            <div className="paragraph_article">
              <p>{explanation}</p>
            </div>
          </div>
        </div>

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
