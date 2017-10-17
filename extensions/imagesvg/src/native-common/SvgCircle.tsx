/**
* SvgCircle.tsx
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform abstraction for
* SVG Circle (scalable vector graphics) elements.
*/

import React = require('react');
import RNSvg = require('react-native-svg');

import SvgInterfaces = require('../common/Interfaces');
import SvgTypes = require('../common/Types');

export class SvgCircle extends React.Component<SvgTypes.SvgCircleProps, {}> {
    render() {
        return (
            <RNSvg.Circle
                key = { this.props.key }
                strokeWidth={ this.props.strokeWidth }
                strokeOpacity={ this.props.strokeOpacity }               
                fillOpacity={ this.props.fillOpacity }
                fill={ this.props.fillColor || '#fff' }
                stroke={ this.props.strokeColor}
                cx={this.props.cx} 
                cy={this.props.cy} 
                r={this.props.r} 
            />
        );
    }
}

export default SvgCircle;
