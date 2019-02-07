import React from 'react';
import axios from 'axios';

import process1 from '../img/process1.png'
import process2 from '../img/process2.png'
import process3 from '../img/process3.png'
import btn1 from '../img/btn1.png'
import btn2 from '../img/btn2.png'
import btn3 from '../img/btn3.png'

class Process extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {
    axios.get("http://localhost:5000/content")
    .then(res => {
      this.setState(
        {
          step1_title: res.data.process.step1.title,
          step1_content: res.data.process.step1.content,
          step2_title: res.data.process.step2.title,
          step2_content: res.data.process.step2.content,
          step3_title: res.data.process.step3.title,
          step3_content: res.data.process.step3.content,
        }
      )
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <section className="process">
        <div className="growth-levers">
          <div className="gl-left">
          <img className="number" src={btn1} alt="step"></img>
            <h3>{this.state.step1_title}</h3>
            <p className="lorem">{this.state.step1_content}</p>
          </div>
          <div className="gl-right mobile-none"><img src={process1} alt="coworkers" height="270px" width="600px" /></div>
        </div>
        <div className="growth-experiments">
          <div className="ge-left mobile-none"><img src={process2} alt="coworkers" height="270px" width="600px" /></div>
          <div className="ge-right">
          <img className="number" src={btn2} alt="step"></img>
            <h3>{this.state.step2_title}</h3>
            <p className="lorem">{this.state.step2_content}</p>
          </div>
        </div>
        <div className="design-build-analyse">
          <div className="dba-left">
          <img className="number" src={btn3} alt="step"></img>
            <h3>{this.state.step3_title}</h3>
            <p className="lorem">{this.state.step3_content}</p>
          </div>
          <div className="dba-right mobile-none"><img src={process3} alt="coworkers" height="270px" width="600px" /></div>
        </div>
      </section>
    )
  }
};  

export default Process;