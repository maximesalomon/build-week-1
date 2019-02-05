import React from 'react';
import dashboard from '../img/dashboard.png';

const Hero = () => {
    return (
      <section className="hero">
        <div className="uvp">
          <h1 className="tagline">Actually launch growth experiments</h1>
          <p className="description">We empower tech companies to prioritize, build 
            & analyse growth experiments by providing them with on-demand tech, design 
            & marketing ressources.</p>
        </div>
        <div className="request">
          <input type="text" name="email"></input>
          <button>Request access</button>
        </div>
        <div className="dashboard">
          <img src={dashboard} alt="Dashboard" />
        </div>
      </section>
    )
};  

export default Hero;