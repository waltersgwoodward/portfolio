import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import HamburgerMenu from './MobileMenu/HamburgerMenu';

const bodyScrollLock = require('body-scroll-lock');

const MobileMenu = () => {
    const [sideBarOpen, setSideBarState] = useState(false);

    const toggleSideBarState = () => {
        setSideBarState(!sideBarOpen);
    }

    useEffect( () => {}, [sideBarOpen]);

    const targetElement = document.body;
    sideBarOpen ? bodyScrollLock.disableBodyScroll(targetElement) : bodyScrollLock.enableBodyScroll(targetElement);
    return (
        <div className='mobile-menu__wrap'>
            <div className="mobile-menu__menu">
                <HamburgerMenu toggleSideBarState={toggleSideBarState} />
                <div className={sideBarOpen ? 'dropdownOpen' : 'dropdownClosed'}>
                    <div className='dropdown__content' onClick={toggleSideBarState}>
                        <Link to='/' className='navbar__link' onClick={toggleSideBarState}>
                            <FontAwesomeIcon icon={faHome} className='navbar__icon' aria-hidden='false' />
                            <div>Home</div>
                        </Link>
                        <Link to='/about' className='navbar__link' onClick={toggleSideBarState}>
                            <FontAwesomeIcon icon={faUser} className='navbar__icon' aria-hidden='false' />
                            <div>About</div>
                        </Link>
                        <Link to='/portfolio' className='navbar__link' onClick={toggleSideBarState}>
                            <FontAwesomeIcon icon={faBriefcase} className='navbar__icon' aria-hidden='false' />
                            <div>Portfolio</div>
                        </Link>
                        <Link to='/contact' className='navbar__link' onClick={toggleSideBarState}>
                            <FontAwesomeIcon icon={faEnvelope} className='navbar__icon' aria-hidden='false' />
                            <div>Contact</div>
                        </Link>
                    </div>
                    <div className="dropdown__overlay" onClick={toggleSideBarState}></div>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
