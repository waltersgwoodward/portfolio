import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import NavBar from "./../NavBar";
import Footer from "./../Footer";

class Scan123 extends Component {
  render() {
    return (
        <Fragment>
            <NavBar/>
            <div className='page'>
                <div className='page__row page-row__name'>Scan123 Page</div>
            </div>
            <Footer/>
        </Fragment>
    );
  }
}

export default Scan123;
