import React from 'react';

import DesktopMenu from './NavBar/DesktopMenu';
import MobileMenu from './NavBar/MobileMenu';

const NavBar = () => {
    return (
        <nav className='navbar__wrap'>
            <DesktopMenu />
            <MobileMenu />
        </nav>
    );
}

export default NavBar;
