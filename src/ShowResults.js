import React from 'react';
import './ShowResults.css';

class ShowResults extends React.Component {
    render() {
        if (this.props.showResults) {
            if (this.props.percentFlag) {
                return (
                    <div className="ShowResults"> {this.props.results.toFixed(2)}% &nbsp;&nbsp;&nbsp;&nbsp;{"With -5 to hit: "} &nbsp;&nbsp;&nbsp;&nbsp;{this.props.moddedResults.toFixed(2)}%</div>
                )
            }
            else {
                return (
                    <div className="ShowResults">  {this.props.results.toFixed(2)} &nbsp;&nbsp;&nbsp;&nbsp;{"With +10 to damage: "} &nbsp;&nbsp; &nbsp;&nbsp;{this.props.moddedResults.toFixed(2)}</div>
                )
            }
        }
        else {
            return null;
        }
    }
}

export default ShowResults; 