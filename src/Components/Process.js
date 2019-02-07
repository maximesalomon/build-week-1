import React from 'react';
import process1 from '../img/process1.png'
import process2 from '../img/process2.png'
import process3 from '../img/process3.png'
import btn1 from '../img/btn1.png'
import btn2 from '../img/btn2.png'
import btn3 from '../img/btn3.png'

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
        <img className="number" src={btn1}></img>
          <h3>{processContent.process_1_title}</h3>
          <p className="lorem">{processContent.process_1_txt}</p>
        </div>
        <div className="gl-right mobile-none"><img src={process1} alt="coworkers" height="270px" width="600px" /></div>
      </div>
      <div className="growth-experiments">
        <div className="ge-left mobile-none"><img src={process2} alt="coworkers" height="270px" width="600px" /></div>
        <div className="ge-right">
        <img className="number" src={btn2}></img>
          <h3>{processContent.process_2_title}</h3>
          <p className="lorem">{processContent.process_2_txt}</p>
        </div>
      </div>
      <div className="design-build-analyse">
        <div className="dba-left">
        <img className="number" src={btn3}></img>
          <h3>{processContent.process_3_title}</h3>
          <p className="lorem">{processContent.process_3_txt}</p>
        </div>
        <div className="dba-right mobile-none"><img src={process3} alt="coworkers" height="270px" width="600px" /></div>
      </div>
      </section>
    )
};  

export default Process;