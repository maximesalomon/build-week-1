import React from 'react';
import reeport from '../img/reeport.png';
import algolia from '../img/algolia.png';
import riseup from '../img/riseup.png';
import monbanquet from '../img/monbanquet.png';
import parispousse from '../img/parispousse.png';

const Customers = () => {
    return (
      <section className="customers">
        <h4>Our team members worked for</h4>
        <div className="logos">
            <img src={reeport} alt="Reeport" height="38px" />
            <img src={algolia} alt="Algolia" height="30px" />
            <img src={riseup} alt="Riseup" height="60px" />
            <img src={monbanquet} alt="monbanquet" height="28px" />
            <img src={parispousse} alt="ParisPousse" height="100px" />
        </div>
      </section>
    )
};  

export default Customers;