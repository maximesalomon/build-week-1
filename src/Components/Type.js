import React from 'react';

import saas from '../img/saas.png'
import marketplace from '../img/marketplace.png'
import ecommerce from '../img/ecommerce.png'

let typeContent = {
    type_title: "Who we work with",
    category_1_title: "SaaS",
    category_1_txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category_2_title: "Marketplace",
    category_2_txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category_3_title: "Ecommerce",
    category_3_txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

const Type = () => {
    return (
      <section className="type">
        <div className="type-title"><h3>{typeContent.type_title}</h3></div>
        <div className="type-categories">
            <div className="SaaS category">
                <img src={saas}></img>
                <div><h4>{typeContent.category_1_title}</h4></div>
                <div><p>{typeContent.category_1_txt}</p></div>
            </div>
            <div className="Marketplace category">
                <img src={marketplace}></img>
                <div><h4>{typeContent.category_2_title}</h4></div>
                <div><p>{typeContent.category_2_txt}</p></div>
            </div>
            <div className="Ecommerce category">
                <img src={ecommerce}></img>
                <div><h4>{typeContent.category_3_title}</h4></div>
                <div><p>{typeContent.category_3_txt}</p></div>
            </div>
        </div>
      </section>
    )
};  

export default Type;