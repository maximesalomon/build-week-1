import React from 'react';
import coworkersright from '../img/coworkers-right.png'
import coworkersleft from '../img/coworkers-left.png'

let processContent = {
  process_1_title: "We uncover your company growth levers",
  process_1_txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  process_2_title: "We pre-select proven growth experiments",
  process_2_txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  process_3_title: "We design, build & analyse your growth experiments",
  process_3_txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

}

const Process = () => {
    return (
      <section className="process">
      <div className="growth-levers">
        <div className="gl-left">
          <h3>{processContent.process_1_title}</h3>
          <p className="lorem">{processContent.process_1_txt}</p>
        </div>
        <div className="gl-right mobile-none"><img src={coworkersright} height="300px" /></div>
      </div>
      <div className="growth-experiments">
        <div className="ge-left mobile-none"><img src={coworkersleft} height="300px" /></div>
        <div className="ge-right">
          <h3>{processContent.process_2_title}</h3>
          <p className="lorem">{processContent.process_2_txt}</p>
        </div>
      </div>
      <div className="design-build-analyse">
        <div className="dba-left">
          <h3>{processContent.process_3_title}</h3>
          <p className="lorem">{processContent.process_3_txt}</p>
        </div>
        <div className="dba-right mobile-none"><img src={coworkersright} height="300px" /></div>
      </div>
      </section>
    )
};  

export default Process;