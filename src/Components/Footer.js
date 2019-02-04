import React from 'react';
import team from '../img/team-illustration.png';
import logo from '../img/croissant-logo.png'

const Footer = () => {
    return (
      <footer className="footer">
        <div><img src={team} /></div>
        <div className="footerbar">
          <div classsName="footer-logo"><img src={logo} alt="logo" height="33px" /></div>
          <div classsName="copyright"><p>2019 Croissant - Made with ❤️ in 🌍</p></div>
        </div>
      </footer>
    )
};  

export default Footer;