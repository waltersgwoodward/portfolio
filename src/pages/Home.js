import React, { Fragment } from 'react';

import HomeAbout from './Home/About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Fragment>
            <HomeAbout />
            <Footer />
        </Fragment>
    );
}

export default Home;
