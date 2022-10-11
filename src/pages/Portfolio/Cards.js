import { NavLink } from "react-router-dom";
import { Fragment } from 'react';
import projects from './projects';
import NoCardsMessage from './NoCardsMessage';
import Card from './Card.js';

const Cards = () => {
    return (
        <div className="page">
            <div className='page-paragraph__wrap'>
                <div className="page-paragraph__header">Portfolio</div>
                <div className="portfolio">
                    {projects.length === 0 ? <NoCardsMessage />
                        :
                        <Fragment>
                            <div className="page__paragraph">Below is a short list of some projects that I have built and am able to share publically.&nbsp;
                                <NavLink
                                    className='cards-header__link'
                                    to='/contact'
                                    aria-label="Click here to view Walter's Contact form"
                                >Please click here to be taken to the Contact page</NavLink>&nbsp;to schedule a time to talk about my more recent work.
                            </div>
                            <div className="cards">{projects.map((card, index) => <Card card={card} id={index} />)}</div>
                        </Fragment>}

                </div>
            </div>
        </div>
    );
}

export default Cards;
