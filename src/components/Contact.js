import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import Form from './Contact/EmailJSForm.js';
import Footer from './Footer.js';

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
