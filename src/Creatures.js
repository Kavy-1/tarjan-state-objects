import React, { Component } from 'react';
import CreatureForm from './CreatureForm';

class Creatures extends Component {

    state = {
        creatures: [
            'Unicorn',
            'Sphinx',
            'Kappa',
            'Dryad',
            'Jackalope'
        ]
    };

    // Capture and store the new creature name
    onAddCreature = (creatureParam) => {
        console.log('new creature name is:', creatureParam);
        this.setState({
            newCreatureName: '',
            creatures: [
                ...this.state.creatures,
                creatureParam
            ]
        });
    }

    loveIt = (creatureParam) => {
        console.log('inside loveIt:', creatureParam);
    }

    render() {

    /*  let creaturesListItems = [];
        this.state.creatures.forEach(creature => {
            creaturesListItems.push (
                <li>{creature}</li>
            );
        });
    */
    
    // .map()
    // let creaturesListItems = this.state.creatures.map(creature => <li>{creature}</li>);

        return (
            <div>
                <h1>Featured Creature of the Night:</h1>
                <h3>{this.props.creatureOfTheNight}</h3>

                <CreatureForm onAddCreature={this.onAddCreature}/>

                <ul>
                    {this.state.creatures.map((creature, i) => 
                    <li key={i}>
                        {creature}
                        <button onClick={() => this.loveIt(creature)}>Love It!</button>
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default Creatures;