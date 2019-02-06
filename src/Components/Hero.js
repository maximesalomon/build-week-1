import React from 'react';
import posed from "react-pose";
import styled from 'styled-components'

import dashboard from '../img/dashboard.png';

let heroContent = {
  tagline: "Actually launch growth experiments",
  description: "We empower tech companies to prioritize, build & analyse growth experiments by providing them with on-demand tech, design & marketing ressources.",
  button_text: "Request access",
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  state = { hovering: false };
  render() {
    return (
      <section className="hero">
        <div className="uvp">
          <h1 className="tagline">{heroContent.tagline}</h1>
          <p className="description">{heroContent.description}</p>
        </div>
        <div className="request">
          <input type="text" name="email"></input>
          <button>{heroContent.button_text}</button>
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
    )
  }
};  

export default Hero;