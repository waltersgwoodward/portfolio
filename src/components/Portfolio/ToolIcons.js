import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToolIcons = props => {
    const toolIcons = () => {
        return props.tool_icons.map((tool_icon, i) => {
            return (
                <span className='card__icon' key={tool_icon + "-" + i}>
                    <FontAwesomeIcon icon={tool_icon} aria-hidden="false" />
                </span>
            )
        })
    };

    return <Fragment>{toolIcons()}</Fragment>;
}

export default ToolIcons;
