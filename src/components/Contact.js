import React, { Component, Fragment } from 'react';

import NavBar from './NavBar';
import Form from './Contact/Form';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
        <Fragment>
        <NavBar/>
        <Form/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Contact;
