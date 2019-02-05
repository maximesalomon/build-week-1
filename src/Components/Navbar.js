import React from 'react';
import logo from '../img/croissant-logo.png';
import hamburger from '../img/hamburger.png'

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
      <header>
        <div className="navbar">
          <div className="mobile-menu">
            <img src={logo} className="logo" alt="logo" height="33px" />
            <img onClick={this.toggle}src={hamburger} className="hamburger" alt="menu" height="33px" />
          </div>
          <nav className="dropdown toggle">
              <div className="navbar-links">
                <a href="">Experiments</a>
                <a href="">Resources</a>
              </div>
              <div className='navbar-cta'>
                <button className='btn'>+33 6 50 08 49 44</button>
              </div>
            </nav>
          {
            this.state.toggleDropdown
            ? (
              <nav className="dropdown">
                <div className="navbar-links">
                  <a href="">Experiments</a>
                  <a href="">Resources</a>
                </div>
                <div className='navbar-cta'>
                  <button className='btn'>+33 6 50 08 49 44</button>
                </div>
              </nav>
            )
            : null
          }
        </div>
      </header>
    )
  }
};

export default Navbar;