import React from 'react';
import reeport from '../img/reeport.png';
import algolia from '../img/algolia.png';
import riseup from '../img/riseup.png';
import monbanquet from '../img/monbanquet.png';
import parispousse from '../img/parispousse.png';

const Customers = () => {
    return (
      <section className="customers">
        <p>Our team members worked for</p>
        <div className="logos">
            <img src={reeport} alt="Reeport" />
            <img src={algolia} alt="Algolia" />
            <img src={riseup} alt="Riseup" />
            <img src={monbanquet} alt="monbanquet" />
            <img src={parispousse} alt="ParisPousse" />
        </div>
      </section>
    )
};  

export default Customers;