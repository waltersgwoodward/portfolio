import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

import ToolIcons from './ToolIcons.js';
import NoCardsMessage from './NoCardsMessage';

import { faDesktop, faServer, faDatabase, faRocket, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from './projects';

const Cards = () => {
    const count = () => {
        return projects.length > 0;
    }
    const createCards = () => {
        let cardsList = projects.map((card, index) => (
            <div className='card__wrap' key={index}>
                <div className="card__row--row">{card.tool_icons ? <ToolIcons tool_icons={card.tool_icons} /> : null}</div>

                <div className="card__row">
                    <div className='card__title'>{card.title}</div>
                </div>
                <div className="card__row card__row--tools">
                    {card.frontend_tools ? <div className='card__languages'>
                        <FontAwesomeIcon icon={faDesktop} aria-hidden="false" />
                        <b> {card.frontend_tools}</b>
                    </div> : null}
                    {card.backend_tools ? <div className='card__languages'>
                        <FontAwesomeIcon icon={faServer} aria-hidden="false" />
                        <b> {card.backend_tools}</b>
                    </div> : null}

                    {card.database_tools ? <div className='card__languages'>
                        <FontAwesomeIcon icon={faDatabase} aria-hidden="false" />
                        <b> {card.database_tools}</b>
                    </div> : null}
                    {card.deployment_tools ? <div className='card__languages'>
                        <FontAwesomeIcon icon={faRocket} aria-hidden="false" />
                        <b> {card.deployment_tools}</b>
                    </div> : null}

                </div>
                <div className="card__row">
                    <div className='card__description'>{card.text}</div>
                    <div>
                        {card.deploy_link ? (<a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={card.deploy_link}
                            className='card__button'
                            aria-label={"Click on this link to view the live deployment of this project" + card.title}
                        >
                            <FontAwesomeIcon icon={faLink} aria-hidden="false" />
                        </a>) : null
                        }
                        {card.code_link ? (
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='card__button'
                                href={card.code_link}
                                aria-label='Click on this link to view the code for this project.'
                            >
                                <FontAwesomeIcon icon={faGithub} aria-hidden="false" />
                            </a>
                        ) : null
                        }
                    </div>
                </div>
            </div>
        ));
        return cardsList;
    };
    return (
        <div className="page">
            <div className='page-paragraph__wrap'>
                <div className="page-paragraph__header">Portfolio</div>

                <div className="portfolio">
                    {!count() ? <NoCardsMessage />
                        :
                        <Fragment>
                            <div className="page__paragraph">Below is a short list of some projects that I have built and am able to share publically.&nbsp;
                                <NavLink
                                    className='cards-header__link'
                                    to='/contact'
                                    aria-label="Click here to view Walter's Contact form"
                                >Please click here to be taken to the Contact page</NavLink>&nbsp;to schedule a time to talk about my more recent work.
                            </div>
                            <div className="cards">
                                {createCards()}
                            </div>
                        </Fragment>}

                </div>
            </div>
        </div>
    );
}

export default Cards;
