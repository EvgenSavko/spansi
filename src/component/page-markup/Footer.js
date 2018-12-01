import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  toggleClass = e => {
    this.ul.childNodes.forEach((elem, index) => {
      if (e.target.parentNode.className === 'row') {
        e.target.parentNode.className = 'row li_active';
        elem.childNodes[0].className = 'row';
      } else if (!e.target.parentNode.className) {
        if (index === 0) elem.childNodes[0].className = 'row li_active';
        else elem.childNodes[0].className = 'row';
      }
    });
  };

  render() {
    return (
      <div className="block_footer ">
        <div className="body_footer">
          <Link to={`/`}>
            <div className="logo" onClick={this.toggleClass} />
          </Link>
          <ul
            className="ul_footer"
            ref={element => {
              this.ul = element;
            }}
          >
            <Link to={`/`}>
              <li className="row li_active" onClick={this.toggleClass}>
                <h1 className="insetshadow0">A</h1>
                <h1 className="insetshadow1">P</h1>
                <h1 className="insetshadow2">O</h1>
                <h1 className="insetshadow3">D</h1>
              </li>
            </Link>
            <Link to={`/Mars`}>
              <li className="row" onClick={this.toggleClass}>
                <h1 className="insetshadow00">M</h1>
                <h1 className="insetshadow11">A</h1>
                <h1 className="insetshadow22">R</h1>
                <h1 className="insetshadow33">S</h1>
              </li>
            </Link>
            <Link to={`/`}>
              <li>{/* <h1>Personal Area</h1> */}</li>
            </Link>
          </ul>
        </div>

        <div className="end_footer" />
      </div>
    );
  }
}

export default Footer;
