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
    console.log(document.location.pathname);
    // let arr = [...this.state.arrLi];
    let arrLi = this.state.arrLi.map(item => {
      if (document.location.pathname.replace('/', '') === item.name) item.class = 'row li_active';
      return item;
    });
    console.log(arrLi);
    this.setState({ arrLi });
  }

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

  renderLi() {
    return this.state.arrLi.map(item => (
      <Link to={`/${item.name}`} key={item.name}>
        <li className={`${item.class}`} data-name={`{item.name}`} onClick={this.toggleClass}>
          <h1 className={`${item.h1Class}`}>{item.name}</h1>
        </li>
      </Link>
    ));
  }

  render() {
    // console.log(document.location.pathname);
    return (
      <footer className="block_footer ">
        <div className="body_footer">
          <Link to="/">
            <div className="logo" onClick={this.toggleClass} />
          </Link>
          <ul
            className="ul_footer"
            ref={element => {
              this.ul = element;
            }}
          >
            {/* <Link to={`/APOD`}>
              <li className="row li_active" data-name="APOD" onClick={this.toggleClass}>
                <h1 className="insetshadow0">APOD</h1>
              </li>
            </Link>
            <Link to={`/Mars`}>
              <li className="row" data-name="MARS" onClick={this.toggleClass}>
                <h1 className="insetshadow00">MARS</h1>
              </li>
            </Link> */}
            {this.renderLi()}
          </ul>
        </div>

        <div className="end_footer" />
      </footer>
    );
  }
}

export default Footer;
