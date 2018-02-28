import React, { Component } from 'react';
import 'tachyons';

class Age extends Component {
    render() {
        const { age } = this.props;
        return (
            <p className='ph1 w-20'>{age}</p>
        )
    }
}

export default Age;