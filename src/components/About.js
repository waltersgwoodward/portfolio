import React, { Fragment } from 'react';

import NavBar from './NavBar';
import Bio from './About/Bio';
import Footer from './Footer';

const About = () => {
    return (
        <Fragment>
            <NavBar />
            <Bio />
            <Footer />
        </Fragment>
    );
}

export default About;
