import React, { Component } from 'react';
import logo from '../Assets/Images/logo.svg';
import '../Styles/Logo.css';

class Logo extends Component {
    render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}

export default Logo;