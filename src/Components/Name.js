import React, { Component } from 'react';
import '../Styles/Name.css';
import 'tachyons';

class Name extends Component {
    render() {
        const {name} = this.props;
        return (
            <p className='ph1 w-20'>{name}</p>
        )
    }
}

export default Name;