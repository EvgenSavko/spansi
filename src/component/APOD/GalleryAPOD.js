import React, { Component } from 'react';
import { connect } from 'react-redux';

class GalleryAPOD extends Component {
  renderCart() {
    const { apod } = this.props;
    return this.removeDuplicates(this.sortAPODByDate(apod), 'date').map((item, index) => (
      <div className="cart_gallery" key={item.date + index++}>
        <div className="hover" />
        <h4 className="clip">{item.title}</h4>
        <h4>{item.date}</h4>
        <div className="img_apod_gallery">
          {item.media_type === 'image' && (
            <div className="image border" style={{ backgroundImage: `url(${item.url})` }} />
          )}
          {item.media_type === 'video' && (
            <iframe
              src={`${item.url}`}
              className="image border"
              allowFullScreen=""
              frameBorder="0"
              scrolling="no"
              allow="autoplay"
              title={item.title}
            />
          )}
        </div>
      </div>
    ));
  }

  sortAPODByDate(arr) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      let c = a.date,
        d = b.date;
      if (c < d) {
        return -1;
      } else if (c > d) {
        return 1;
      }
      return 0;
    });
  }

  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  render() {
    const { apod } = this.props;
    return (
      <div className="gallery_apod">
        {apod.length > 1 && (
          <div className="title_article">
            <h3>Gallery</h3>
          </div>
        )}
        {apod.length > 1 && <div className="row">{this.renderCart()}</div>}
      </div>
    );
  }
}
export default connect(
  state => ({
    apod: state.apod,
  }),
  {}
)(GalleryAPOD);
