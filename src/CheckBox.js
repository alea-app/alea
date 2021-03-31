import React from 'react';
import './CheckBox.css';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ checked: event.target.checked });
        this.props.updateAlea(event.target.checked);
    }
    render() {
        return (
            <form className="CheckBox">
                <label>
                    {this.props.label}
                    <input
                        name={this.props.name}
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleChange} />
                </label>
            </form>
        )
    }
}

export default CheckBox;