import React from 'react';
import './App.css';
import logoURL from './assets/img/iscream-logo.png';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
        }
    }

    render() {
        return (
            <div className="homepage-div">
                <img src={logoURL} alt="iscream.app" className="home-logo-center"/>
            </div>
        );
    }
}

export default HomePage;
