import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import ContactLinks from './ContactLinks';

class About extends PureComponent {
    render() {
        return (
            <div className='page'>
                <div className='page__row page-row__name'>WALTER WOODWARD</div>
                <div className='page__row page-row__title'>FULL STACK WEB DEVELOPER</div>
                <div className='page__row page-row__link'>
                    <Link
                        className='page-row__link'
                        to='/about'
                        aria-label="Click here to read more about Walter"
                    >ABOUT</Link>
                </div>
                <div className='page__row page-row__link'>
                    <Link
                        className='page-row__link'
                        to='/portfolio'
                        aria-label="Click here to view Walter's current projects"
                    >PORTFOLIO</Link>
                </div>
                <div className='page__row page-row__link'>
                    <Link
                        className='page-row__link'
                        to='/contact'
                        aria-label="Click here to view Walter's Contact form"
                    >CONTACT</Link>
                </div>
                <div className="page__row page-row__link">
                    <ContactLinks />
                </div>
            </div>
        );
    }
}

export default About;
