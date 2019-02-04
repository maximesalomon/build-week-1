import React from 'react';
import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import Customers from './Components/Customers.js';
import Process from './Components/Process.js';

class App extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="navbar-container"><Navbar /></div>
                <div className="container">
                    <Hero />
                    <Customers />
                    <Process />
                </div>
            </div>
        )
    }
}

export default App;