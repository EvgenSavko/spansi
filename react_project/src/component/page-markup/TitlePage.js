import React, { Component } from 'react'

class TitlePage extends Component {
  render() {
    const { name } = this.props
    return (
      <div className="title_page">
        <h1>{name}</h1>
      </div>
    )
  }
}

export default TitlePage
