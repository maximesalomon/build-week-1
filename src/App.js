import React from 'react';
import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js';

class App extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="navbar-container"><Navbar /></div>
                <div className="container">
                    <Hero />
                </div>
            </div>
        )
    }
}

export default App;