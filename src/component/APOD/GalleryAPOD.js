import React, { Component } from 'react';
import { connect } from 'react-redux';

class GalleryAPOD extends Component {
  renderCart() {
    const { apod } = this.props;
    console.log('sort', this.sortAPODByDate(apod));
    return this.sortAPODByDate(apod).map((item, index) => (
      <div className="cart_gallery" key={item.date + index++}>
        <div className="hover" />
        <h4 className="clip">{item.title}</h4>
        <h4>{item.date}</h4>
        <div className="img_apod_gallery">
          <div
            className="image border"
            style={{
              backgroundImage: `url(${item.url})`,
            }}
          />
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

  render() {
    const { apod } = this.props;
    return (
      <div className="gallery_apod">
        <div className="title_article">
          <h3>Gallery</h3>
        </div>
        {apod.length > 0 && <div className="row">{this.renderCart()}</div>}
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
