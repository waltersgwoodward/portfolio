import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

import ToolIcons from './ToolIcons.js';
import NoCardsMessage from './NoCardsMessage';

import { faDesktop, faServer, faDatabase, faRocket, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Cards extends Component {
    render() {
        const count = () => {
            return (Object.keys(this.props.projects).length > 0);
        }
        const createCards = () => {
            const { projects } = this.props;
            let cardsList = Object.keys(this.props.projects).map((card, index) => (
                <div className='card__wrap' key={index}>
                    <div className="card__row--row">{projects[card].tool_icons ? <ToolIcons card={projects[card]} /> : null}</div>
                    
                    <div className="card__row">
                        <div className='card__title'>{projects[card].title}</div>
                    </div>
                    <div className="card__row card__row--tools">
                        {projects[card].frontend_tools ? <div className='card__languages'>
                            <FontAwesomeIcon icon={faDesktop} aria-hidden="false" />
                            <b> {projects[card].frontend_tools}</b>
                        </div> : null}
                        {projects[card].backend_tools ? <div className='card__languages'>
                            <FontAwesomeIcon icon={faServer} aria-hidden="false" />
                            <b> {projects[card].backend_tools}</b>
                        </div> : null}

                        {projects[card].database_tools ? <div className='card__languages'>
                            <FontAwesomeIcon icon={faDatabase} aria-hidden="false" />
                            <b> {projects[card].database_tools}</b>
                        </div> : null}
                        {projects[card].deployment_tools ? <div className='card__languages'>
                            <FontAwesomeIcon icon={faRocket} aria-hidden="false" />
                            <b> {projects[card].deployment_tools}</b>
                        </div> : null}

                    </div>
                    <div className="card__row">
                        <div className='card__description'>{projects[card].text}</div>
                        <div>
                            {projects[card].deploy_link ? (<a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={projects[card].deploy_link}
                                className='card__button'
                                aria-label={"Click on this link to view the live deployment of this project" + projects[card].title}
                            >
                                <FontAwesomeIcon icon={faLink} aria-hidden="false" />
                            </a>) : null
                            }
                            {projects[card].code_link ? (
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='card__button'
                                    href={projects[card].code_link}
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
                <div className="image__inkscape"></div>
                <div className='page-paragraph__wrap'>
                <div className="page-paragraph__header">Portfolio</div>
                
                <div className="portfolio">
                    {!count() ? <NoCardsMessage />
                        : 
                        <Fragment>
                        <div className="page__paragraph">Below is a short list of some projects that I have built and am able to share publically. Unfortunately, 
                        I am not able to show most of the work I have done in the last year and a half, as it has been on an internal/private application for a proprietary software company.&nbsp;
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
}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps)(Cards);
