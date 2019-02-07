import React from 'react';
import axios from 'axios';

import reeport from '../img/reeport.png';
import algolia from '../img/algolia.png';
import riseup from '../img/riseup.png';
import monbanquet from '../img/monbanquet.png';
import parispousse from '../img/parispousse.png';

let customersContent = {
  text: "Our team members worked for"
}

class Customers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: []
    }
  }
    componentDidMount() {
      axios.get("http://localhost:5000/navbar")
      .then(res => {
        this.setState({text: res.data.link_1})
        console.log(res.data.link_1)
      })
      .catch(err => {
        console.log(err);
      });
    }
    render() {
      return (
        <section className="customers">
          <h4>{this.state.text}</h4>
          <div className="logos">
              <img src={reeport} alt="Reeport" height="38px" />
              <img src={algolia} alt="Algolia" height="30px" />
              <img src={riseup} alt="Riseup" height="60px" className="mobile-none" />
              <img src={monbanquet} alt="monbanquet" height="28px" />
              <img src={parispousse} alt="ParisPousse" height="100px" className="mobile-none" />
          </div>
        </section>
      )
    } 
};  

export default Customers;