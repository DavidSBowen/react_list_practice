import React, { Component } from 'react';
import '../Styles/App.css';
import LineItem from './LineItem';
import data from '../Assets/Data/Data.json';

class App extends Component {
  render() {

    const lineItemsArray = data.map((a) => {
      return (
        <LineItem
          name={a.name}
          age={a.age}
          gender={a.gender}
          email={a.email}
        />
      )
    })

    return (
      <div className="App">
        <header className="App-header">
        </header>
        {lineItemsArray}
      </div>
    );
  }
}

export default App;
