// const http = require('http');
const express = require('express');

const port = 5000;

const server = express();


server.get('/', (req, res) => {
    res.send('Croissant Web API');
});

server.get('/content', (req, res) => {
    const content = {
        navbar: {
            link_1: "Experiments",
            link_2: "Resources",
            phone_number: "+33 6 50 08 49 44",
        },
        hero: {
            tagline: "Actually launch growth experiments",
            description: "We empower tech companies to prioritize, build & analyse growth experiments by providing them with on-demand tech, design & marketing resources.",
            btn_cta: "Request access"
        },
        customers: {
            title: "Our team members worked for",
        },
        process: {
            step1: {
                title: "We uncover your company growth levers",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            step2: {
                title: "We pre-select proven growth experiments",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            step3: {
                title: "We design, build & analyse your growth experiments",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
        },
        type: {
            title: "Who we work with",
            categories: {
                category1: {
                    title: "SaaS",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                category2: {
                    title: "Marketplace",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                category3: {
                    title: "Ecommerce",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                }
            }
        }
      };

      res.status(200).json(content);
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});