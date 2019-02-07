import React from 'react';
import experiments1 from '../img/experiments1.png';
import experiments2 from '../img/experiments2.png';
import experiments3 from '../img/experiments3.png';
import experiments4 from '../img/experiments4.png';

const images = [
  { id: 1, image: experiments1 },
  { id: 2, image: experiments2 },
  { id: 3, image: experiments3 },
  { id: 4, image: experiments4 },
  { id: 1, image: experiments1 },
  { id: 2, image: experiments2 },
  { id: 3, image: experiments3 },
  { id: 4, image: experiments4 }
];

const Experiments = () => {
  return (
    <section className="experiments">
      <div className="slider">
        <div className="cards">
          {images.map(img => <Card key={img.id} image={img.image} />)}
        </div>
      </div>
    </section>
  )
};

class Card extends React.Component {
  render() {
    return (
      <div className="card"><img src={this.props.image} alt="experiments"/></div>
    )
  }
};

export default Experiments;