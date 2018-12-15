import React, { Component } from 'react';

class TitlePage extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="title_page">
        <h2>{name}</h2>
      </div>
    );
  }
}

export default TitlePage;
