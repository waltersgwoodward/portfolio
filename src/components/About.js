import React, { Fragment } from 'react';

import NavBar from './NavBar';
import Bio from './About/Bio';
import Footer from './Footer';

class About extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <Bio/>
        <Footer/>
      </Fragment>
    );
  }
}

export default About;
