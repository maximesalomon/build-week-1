import React from 'react';
import experiments1 from '../img/experiments1.png';
import experiments2 from '../img/experiments2.png';
import experiments3 from '../img/experiments3.png';
import experiments4 from '../img/experiments4.png';

const Experiments = () => {
    return (
      <section className="experiments">
        <div className="slider">
            <Card />
        </div>
      </section>
    )
};

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cards">
      <ul>{listItems}</ul>
        <div clasName="card" data-card="1"><img src={experiments1} /></div>
        <div clasName="card" data-card="1"><img src={experiments1} /></div>
        <div clasName="card" data-card="1"><img src={experiments1} /></div>
        <div clasName="card" data-card="1"><img src={experiments1} /></div>
      </div>
    )
  }
}

export default Experiments;