import React, { PureComponent } from 'react';

import '@shared/styles/App.css'

class CustomAxisLabel extends PureComponent {

    render() {

        const yLabelOffset = {
            y: this.props.marginTop + this.props.innerHeight / 2 + this.props.title.length * 4,
            x: 40
        };

        const xLabelOffset = {
            x: this.props.marginLeft + (this.props.innerWidth) / 2 - this.props.title.length * 2,
            y: 1.2 * this.props.innerHeight
        };

        const transform = this.props.xAxis
            ? `translate(${xLabelOffset.x}, ${xLabelOffset.y})`
            : `translate(${yLabelOffset.x}, ${yLabelOffset.y}) rotate(-90)`;

        return (
            <g transform={transform}>
                <text className='unselectable axis-labels'>
                    {this.props.title}
                </text>
            </g>
        );
    }
}

CustomAxisLabel.displayName = 'CustomAxisLabel';
CustomAxisLabel.requiresSVG = true;
export default CustomAxisLabel;