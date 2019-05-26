import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ContentApod.css';
import { getAPOD } from './../../store/actions/apod';

import Load from '../Loader/Loader';
import DataPicker from './DataPicker';
import ChoiceDateAPOD from './ChoiceDateAPOD';
import GalleryAPOD from './GalleryAPOD';

class ContentApod extends Component {
  componentDidMount() {
    const { apod } = this.props;
    if (apod.length === 1) this.props.getAPOD();

    this.callBackendAPI()
      .then(res => console.log('node bekend', res))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    const { url, title, explanation, media_type } = this.props.apod[0];
    console.log('split data picker');
    return (
      <div className="concent_apod" style={{ color: 'white' }}>
        {!url && <Load />}

        {url && (
          <div className="row ">
            <div className="img_apod ">
              {media_type === 'image' && (
                <div className="image border" style={{ backgroundImage: `url(${url})` }} />
              )}
              {media_type === 'video' && (
                <iframe
                  src={`${url}&autoplay=1`}
                  className="image border"
                  allowFullScreen=""
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay"
                  title={title}
                />
              )}
            </div>
            <div className="article_apod ">
              <div className="title_article">
                <h2>{title}</h2>
              </div>
              <div className="paragraph_article">
                <p>{explanation}</p>
              </div>
              <div className="choice_date">
                <div className="controleChoiceDate">
                  <DataPicker />
                  <ChoiceDateAPOD />
                </div>
              </div>
            </div>
            <GalleryAPOD />
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
