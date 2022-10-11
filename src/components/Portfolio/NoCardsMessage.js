import React from 'react';

const NoCardsMessage = () => {
    return (
        <div className="empty-portfolio__wrap">
            <div className="empty__portfolio">Hi there! I am currently in the middle of rebuilding my portfolio. If you'd like to see some of what I am working on then please check out my Github repository<a
                href='https://github.com/WalterSWoodward'
                target='_blank'
                rel='noopener noreferrer'
                aria-label="Click here to visit Walter's Github profile"
            > <u className="paragraph__link">here</u></a>.</div>
        </div>
    );
}

export default NoCardsMessage;
