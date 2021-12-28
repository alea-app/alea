import React from 'react';
import Combobox from "react-widgets/Combobox";
import './Dropdown.css';


class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false, value: '' }
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(value) {
        let newState = Object.assign({}, this.state);
        newState.value = value;
        this.props.updateAlea(value);
        this.setState(newState);
    }


    render() {
        return <Combobox className="DropDown"
            data={this.props.values}
            defaultOpen={false}
            open={this.state.open}
            onSelect={this.handleChange}
            hideCaret
        />;
    }
}

export default DropDown;