import React, { Component } from 'react';
import Logo from './Logo';
import Name from './Name';
import Age from './Age';
import Gender from './Gender';
import Email from './Email';
import '../Styles/LineItem.css';

class LineItem extends Component {
    render() {
        const { name, age, gender, email } = this.props;
        return (
            <div className="lineItemFlex">
                <Logo />
                <Name name={name} />
                <Age age={age} />
                <Gender gender={gender} />
                <Email email={email} />
            </div>
        )
    }
}

export default LineItem;