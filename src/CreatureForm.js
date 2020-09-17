import React, { Component } from 'react';

class CreatureForm extends Component {

    state = {
        newCreatureName: ''
    }

    // Add the stored creature name to our list
    onChangeCreatureName = (event) => {
        let newCreatureName = event.target.value;
        this.setState({
            newCreatureName: newCreatureName
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text" 
                    placeholder="New Creature Name" 
                    onChange={this.onChangeCreatureName} 
                    value={this.state.newCreatureName} 
                />

                <button onClick={() => this.props.onAddCreature(this.state.newCreatureName)}>Add Creature</button>
            </div>
        );
    }
}

export default CreatureForm;