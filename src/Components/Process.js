import React from 'react';
import coworkersright from '../img/coworkers-right.png'
import coworkersleft from '../img/coworkers-left.png'

const Process = () => {
    return (
      <section className="process">
      <div className="growth-levers">
        <div className="gl-left">
          <h3>1 - We uncover your<br></br>company growth levers</h3>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="gl-right mobile-none"><img src={coworkersright} height="300px" /></div>
      </div>
      <div className="growth-experiments">
        <div className="ge-left mobile-none"><img src={coworkersleft} height="300px" /></div>
        <div className="ge-right">
          <h3>2 - We pre-select proven<br></br>growth experiments</h3>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="design-build-analyse">
        <div className="dba-left">
          <h3>3 - We design, build & analyse<br></br>your growth experiments</h3>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="dba-right mobile-none"><img src={coworkersright} height="300px" /></div>
      </div>
      </section>
    )
};  

export default Process;