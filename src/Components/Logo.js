import React, { Component } from 'react';
import logo from '../Assets/Images/logo.svg';
import '../Styles/Logo.css';
import 'tachyons';

class Logo extends Component {
    render() {
        return (
            <img src={logo} draggable='false' className="App-logo ph1 w-20" alt="logo" />
        )
    }
}

export default Logo;