import React from 'react';
import experiments1 from '../img/experiments1.png';
import experiments2 from '../img/experiments2.png';
import experiments3 from '../img/experiments3.png';
import experiments4 from '../img/experiments4.png';

const Experiments = () => {
    return (
      <section className="experiments">
        <div className="slider">
            <div clasName="card" data-card="1"><img src={experiments1} /></div>
            <div clasName="card" data-card="2"><img src={experiments2} /></div>
            <div clasName="card" data-card="3"><img src={experiments3} /></div>
            <div clasName="card" data-card="4"><img src={experiments4} /></div>
        </div>
      </section>
    )
};  

export default Experiments;