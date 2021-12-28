import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {
    render() {
        const options = {
            animationEnabled: true,
            title: {
                text: this.props.title
            },
            axisY: {
                title: "Damage"
            },
            axisX: {
                title: "Armor Class"
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Normal",
                showInLegend: true,
                dataPoints: this.props.dataPoints

            },
            {
                type: "spline",
                name: "Modded",
                showInLegend: true,
                dataPoints: this.props.moddedDataPoints
            }]
        }


        if (this.props.showChart) {
            return (
                <div>
                    <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
            )
        }
        else {
            return null;
        }


    }
}

export default Chart;