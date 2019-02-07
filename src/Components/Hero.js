import React from 'react';
import posed from "react-pose";
import styled from 'styled-components';
import axios from 'axios';

import dashboard from '../img/dashboard.png';

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

const StyledSquare = styled(Square)`
  width: 942px;
  height: 490px;
  background-image: url(${dashboard});
`;

class Hero extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hovering: false,
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/content")
    .then(res => {
      this.setState(
          {
            tagline: res.data.hero.tagline,
            description: res.data.hero.description,
            btn_cta: res.data.hero.btn_cta
          }
        )
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="container">
        <section className="hero">
          <div className="uvp">
            <h1 className="tagline">{this.state.tagline}</h1>
            <p className="description">{this.state.description}</p>
          </div>
          <div className="request">
            <input type="text" name="email"></input>
            <button>{this.state.btn_cta}</button>
          </div>
          <div className="dashboard">
            <StyledSquare
              className="desktopDashboard"
              pose={this.state.hovering ? "hovered" : "idle"}
              onMouseEnter={() => this.setState({ hovering: true })}
              onMouseLeave={() => this.setState({ hovering: false })}
            />
            <img className="mobileDashboard" src={dashboard} alt="Dashboard" />
          </div>
        </section>
      </div>
    )
  }
};  

export default Hero;