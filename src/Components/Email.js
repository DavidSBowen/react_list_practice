import React, { Component } from 'react';
import 'tachyons';

class Email extends Component {
    render() {
        const { email } = this.props;
        return (
            <p className="ph1 w-20">{email}</p>
        )
    }
}

export default Email;