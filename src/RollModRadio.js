import React from 'react';
import './RollModRadio.css';

class RollModRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.updateAlea(event.target.value);
    }

    render() {
        if (this.props.diceNumber > 1) {
            return (
                <div className="RollModRadio" onChange={this.handleChange}>
                    <input type="radio" value="Advantage" name="rollMod" /> Advantage
                    <input type="radio" value="Disadvantage" name="rollMod" /> Disadvantage
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default RollModRadio;