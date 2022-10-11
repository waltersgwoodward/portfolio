import React from 'react';

// TODO: Consider whether having an entire file for this is worth it (probably not 🤦‍♂️)
const BioLink = props => <a className="cards-header__link " href={props.href}>{props.title}</a>;

export default BioLink;
