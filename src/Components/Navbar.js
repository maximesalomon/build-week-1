import React from 'react';
import axios from 'axios';

import logo from '../img/croissant-logo.png';
import hamburger from '../img/hamburger.png'

let navbarContent = {
  link_1: "Experiments",
  link_2: "Resources",
  phone_number: "+33 6 50 08 49 44",
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropdown: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(e => ({ toggleDropdown: !e.toggleDropdown}))
  }

  render() {
    return (
      /* https://reactjs.org/docs/handling-events.html */
      <header>
        <div className="navbar">
          <div className="mobile-menu">
            <img src={logo} className="logo" alt="logo" height="33px" />
            <img onClick={this.toggle}src={hamburger} className="hamburger" alt="menu" height="33px" />
          </div>
          {
            this.state.toggleDropdown
            ? (
              <nav className="dropdown">
                <div className="navbar-links">
                  <a href="/">Experiments</a>
                  <a href="/">Resources</a>
                </div>
                <div className='navbar-cta'>
                  <button className='btn'>{navbarContent.phone_number}</button>
                </div>
              </nav>
            )
            : (
              <nav className="dropdown toggle">
                <div className="navbar-links">
                  <a href="/">Experiments</a>
                  <a href="/">Resources</a>
                </div>
                <div className='navbar-cta'>
                  <button className='btn'>{navbarContent.phone_number}</button>
                </div>
              </nav>
            )
          }
        </div>
      </header>
    )
  }
};

export default Navbar;