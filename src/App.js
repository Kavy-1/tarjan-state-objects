import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creatures from './Creatures';

class App extends Component {

  state = {
    cohortName: 'Tarjan',
    salutation: 'Hello',
    creatureOfTheNight: '',
    user: {
      name: 'Ethan',
      whereILive: 'Shafer',
      pizzaTopping: 'pepperoni'
    }
  };

  onChangePizza = (event) => {
    let newPizzaTopping = event.target.value
    console.log(newPizzaTopping);
    this.setState ({
      user: {
        ...this.state.user,
        pizzaTopping: newPizzaTopping
      } 
    });
  }

  onChangeCreature = (event) => {
    console.log('creature of the night:', event.target.value);
    this.setState({
      creatureOfTheNight: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.cohortName} Learns State with Objects</h1>

        <div>
          {this.state.salutation}!
        </div>

        <ul>
          <li>My name is {this.state.user.name}.</li>
          <li>I live in {this.state.user.whereILive}.</li>
          <li>My favorite pizza topping is {this.state.user.pizzaTopping}.</li>
        </ul>

        <h4>Edit user</h4>
          <input type="text" placeholder="Favorite Pizza Topping" onChange={this.onChangePizza} />

          <Creatures creatureOfTheNight={this.state.creatureOfTheNight} />

        <h4>Creature of the Night:</h4>
          <input type="text" placeholder="Creature of the Night" onChange={this.onChangeCreature} />
      </div>
    );
  }
}

export default App;
