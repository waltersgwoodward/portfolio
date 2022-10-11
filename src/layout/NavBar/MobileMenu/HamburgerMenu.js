import React from 'react';

const HamburgerMenu = props => {
    return (
        <div className="hamburger__menu" onClick={props.toggleSideBarState}>
            <div className='hamburger-menu__bars'>
                <div className='hamburger-menu__bar' />
                <div className='hamburger-menu__bar' />
                <div className='hamburger-menu__bar' />
            </div>
            <div className='hamburger__text'>Menu</div>
        </div>
    );
}

export default HamburgerMenu;
