import React, { Component } from 'react';

class Creatures extends Component {

    state = {
        newCreatureName: '',
        creatures: [
            'Unicorn',
            'Sphinx',
            'Kappa',
            'Dryad',
            'Jackalope'
        ]
    };

    // Capture and store the new creature name
    onAddCreature = () => {
        console.log('new creature name is:', this.state.newCreatureName);
        this.setState({
            newCreatureName: '',
            creatures: [
                ...this.state.creatures,
                this.state.newCreatureName
            ]
        });
    }

    // Add the stored creature name to our list
    onChangeCreatureName = (event) => {
        let newCreatureName = event.target.value;
        this.setState({
            newCreatureName: newCreatureName
        });
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
                <input
                    type="text" 
                    placeholder="New Creature Name" 
                    onChange={this.onChangeCreatureName} 
                    value={this.state.newCreatureName} 
                />

                <button onClick={this.onAddCreature}>Add Creature</button>

                <ul>
                    {this.state.creatures.map((creature, i) => <li key={i}>{creature}</li>)} 
                </ul>
            </div>
        );
    }
}

export default Creatures;