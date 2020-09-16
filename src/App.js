import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    name: 'Ethan',
    whereILive: 'Shafer',
    pizzaTopping: 'pepperoni'
  }

  render() {
    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>

        <div>
          {this.state.salutation}!
        </div>

        <ul>
          <li>My name is {this.state.name}.</li>
          <li>I live in {this.state.whereILive}.</li>
          <li>My favorite pizza topping is {this.state.pizzaTopping}.</li>
        </ul>
      </div>
    );
  }
}

export default App;
