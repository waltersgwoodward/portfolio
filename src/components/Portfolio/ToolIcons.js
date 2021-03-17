import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ToolIcons extends Component {
    toolIcons = function () {
        return this.props.card.tool_icons.map(function(tool_icon, i) {
            return <span className='card__icon' key={tool_icon + "-" + i}><FontAwesomeIcon icon={tool_icon} aria-hidden="false" /></span>
        })
    };

  render() {
    return (
        <Fragment>
            {this.toolIcons()}
        </Fragment>
    );
  }
}

export default ToolIcons;
