import React from 'react';

function BioLink(props) {
    return (<a 
            className="cards-header__link "
            href={props.href}
            >{props.title}</a>
    );
}

export default BioLink;
