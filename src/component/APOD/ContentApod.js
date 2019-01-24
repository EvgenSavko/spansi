import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ContentApod.css';
import { getAPOD } from './../../actions/apod.js';

import Load from './Loader';
import ChoiceDateAPOD from './ChoiceDateAPOD';

class ContentApod extends Component {
  componentDidMount() {
    const { apod } = this.props;
    console.log('apod.length', apod.length);
    if (apod.length === 1) this.props.getAPOD();
  }

  render() {
    console.log('props', this.props);
    const { hdurl, title, explanation } = this.props.apod[0];
    return (
      <div className="concent_apod" style={{ color: 'white', border: '1px solid red' }}>
        {!hdurl && <Load />}

        {hdurl && (
          <div className="row ">
            <div className="img_apod ">
              <div className="image border" style={{ backgroundImage: `url(${hdurl})` }} />
            </div>
            <div className="article_apod ">
              <div className="title_article">
                <h2>{title}</h2>
              </div>
              <div className="paragraph_article">
                <p>{explanation}</p>
              </div>
              <div className="choice_date">
                <ChoiceDateAPOD />
              </div>
            </div>
          </div>
        )}

        {/* {this.props.apod.length && this.props.apod.map(item => <p key={item.date}>{item.date}</p>)} */}
      </div>
    );
  }
}

export default connect(
  state => ({
    apod: state.apod,
  }),
  { getAPOD }
)(ContentApod);
