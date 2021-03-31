import React from 'react';
import './NumberForm.css';

class NumberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.updateAlea(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="NumberForm" onSubmit={this.handleSubmit}>
                <label>
                    {this.props.label}
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
        )
    }

}

export default NumberForm;
