import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  state = {
    arrLi: [
      {
        name: 'APOD',
        class: 'row',
        h1Class: 'insetshadow0',
      },
      {
        name: 'MARS',
        class: 'row',
        h1Class: 'insetshadow00',
      },
    ],
  };

  componentDidMount() {
    this.setActiveClass(document.location.pathname.replace('/', ''));
  }

  toggleClass = e => {
    this.setActiveClass(e.target.parentNode.getAttribute('data-name'));
  };

  setActiveClass(elem) {
    let arrLi = this.state.arrLi.map(item => {
      if (elem === item.name) item.class = 'row li_active';
      else item.class = 'row';
      return item;
    });
    this.setState({ arrLi });
  }

  renderLi() {
    return this.state.arrLi.map(item => (
      <Link to={`/${item.name}`} key={item.name}>
        <li className={`${item.class}`} data-name={`${item.name}`} onClick={this.toggleClass}>
          <h1 className={`${item.h1Class}`}>{item.name}</h1>
        </li>
      </Link>
    ));
  }

  render() {
    return (
      <footer className="block_footer ">
        <div className="body_footer">
          <Link to="/">
            <div className="logo" onClick={this.toggleClass} />
          </Link>
          <ul
            className="ul_footer"
            // ref={element => {
            //   this.ul = element;
            // }}
          >
            {this.renderLi()}
          </ul>
        </div>
        <div className="end_footer" />
      </footer>
    );
  }
}

export default Footer;
