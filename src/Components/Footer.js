import React from 'react';
import team from '../img/team-illustration.png';
import logo from '../img/croissant-logo.png'
import footerImage from '../img/footer-image.png';

const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="team"><img src={team} alt="croissant-team" /></div>
        <div className="footerbar">
          <div className="footer-logo"><img src={logo} alt="logo" height="33px" /></div>
          <div className="copyright"><p>2019 Croissant - Made with <span role="img" area-label="heart">❤️</span> in <span role="img" are-label="earth">🌍</span></p></div>
          {/* <img className='footerImage' src={footerImage}></img> */}
        </div>
      </footer>
    )
};  

export default Footer;