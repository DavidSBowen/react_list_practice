import React, { Component } from 'react';
import 'tachyons';

class Gender extends Component {
    render() {
        const { gender } = this.props;
        return (
            <p className="ph1 w-20">{gender}</p>
        )
    }
}

export default Gender;