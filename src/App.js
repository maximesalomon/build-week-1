import React from 'react';
import 'whatwg-fetch';

import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import Customers from './Components/Customers.js';
import Process from './Components/Process.js';
import Type from './Components/Type.js';
import Experiments from './Components/Experiments.js';
import Footer from './Components/Footer.js';

class App extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="navbar-container"><Navbar /></div>
                <div className="container">
                    <Hero />
                    <Customers />
                    <Experiments />
                    <Process />
                    <Type />
                </div>
                <div className="footer-container"><Footer /></div>
            </div>
        )
    }
}


export default App;