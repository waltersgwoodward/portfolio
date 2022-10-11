import React, { Fragment } from 'react';

import NavBar from './NavBar';
import Form from './Contact/Form';
import Footer from './Footer';

const Contact = () => {
    return (
        <Fragment>
            <NavBar />
            <Form />
            <Footer />
        </Fragment>
    );
}

export default Contact;
