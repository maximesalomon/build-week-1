import React from 'react';

let typeContent = {
    type_title: "Who we work with",
    category_1_title: "SaaS",
    category_1_txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category_1_title: "Marketplace",
    category_1_txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category_1_title: "Ecommerce",
    category_1_txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

const Type = () => {
    return (
      <section className="type">
        <div className="type-title"><h3>{typeContent.type_title}</h3></div>
        <div className="type-categories">
            <div className="SaaS category">
                <div><h4>{typeContent.category_1_title}</h4></div>
                <div><p>{typeContent.category_1_txt}</p></div>
            </div>
            <div className="Marketplace category">
                <div><h4>{typeContent.category_1_title}</h4></div>
                <div><p>{typeContent.category_1_txt}</p></div>
            </div>
            <div className="Ecommerce category">
                <div><h4>{typeContent.category_1_title}</h4></div>
                <div><p>{typeContent.category_1_txt}</p></div>
            </div>
        </div>
      </section>
    )
};  

export default Type;