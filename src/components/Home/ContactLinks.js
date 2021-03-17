import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ContactLinks() {
    return (
        <div className='icon__links'>
            <a
                id='icon__link_github'
                className='icon__link'
                href='https://github.com/WalterSWoodward'
                target='_blank'
                rel='noopener noreferrer'
                name='github_icon__link'
                aria-label="Click here to visit Walter's Github profile"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    aria-hidden='false'
                    id='fa_github_icon'
                    title="Link to Walter's Github Profile"
                    role="img"
                    aria-label="my-github-profile"
                />
            </a>
        </div>
    );
}

export default ContactLinks;
