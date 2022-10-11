import React, { Fragment } from 'react';

import NavBar from './NavBar';
import HomeAbout from './Home/About';
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <HomeAbout />
            <Footer />
        </Fragment>
    );
}

export default Home;
