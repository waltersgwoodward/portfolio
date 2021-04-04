import React, { Fragment, PureComponent } from 'react';
import { NavLink } from "react-router-dom";

import BioLink from './BioLink';

class Bio extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='page'>
                <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Faith</div>
                        <div className="page__paragraph">At my core, I understand the world through a biblical lens.
Working in the tech industry, I have come to accept that this makes me a bit of a rare breed. For that reason, I offer this short defense for my faith, and explanation for why I don't believe it to be in conflict with most work environments.
                        </div>
                        <br/>
                        <div className="page__paragraph">The bible is interpretted and used in a myriad of ways, and certainly has been at the center of countless evils in this world.
                            <div className="page__paragraph">Yet, within its pages you can find these words:
                                <div className="page__paragraph highlight__text">The entire law is fulfilled in a single decree: "Love your neighbor as yourself" (Galatians 5:14)</div>
                                <div className="page__paragraph highlight__text">Above all, love one another deeply, because love covers over a multitude of sins." (1 Peter 4:8)</div>
                            </div>
                        </div>
                        <div className="page__paragraph">I'm not going to pretend that there aren't what appear to be an abundance of issues in the bible. 
Only that for me, the above two passages are what I mean when I say, "I am a Christian".
With regard to work, I work because it is something I believe I was designed to do.
Jesus says, <span class="highlight__text">"Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God."</span>&nbsp;
Though this applies to more than just work, I believe that Adam and Eve's occupation as gardeners before the fall, together with our own experience, both testify to the truth that work and the dignity it provides, were always intended to be a good thing for mankind to enjoy.
We are nevertheless burdened by many fears, which drive us apart from one another, even ourselves, and make working together, at times, incredibly difficult.
It is my reliance on and belief in God that has been and continues to be my guide in navigating through these challenges.
I have found that this has only made me more of an asset whereever I have worked.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Coding Education</div>
                        <div className="page__paragraph">From January to August 2018, I attended Lambda School's <BioLink href="https://lambdaschool.com/courses/full-stack-web-development" title="Full Stack Web Development program"/>.
I graduated with a basic understanding of JavaScript, some general familiarity with React, and exposure to all the fundamental disciplines required of a full stack web developer.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Work Experience</div>
                        <div className="page__paragraph">After three and a half months, my persistance paid off and I got a job working with <BioLink href="https://www.theatomgroup.com/" title="The Atom Group"/> in Portsmouth, NH.\
The job was a contract position working along side developers at IBM on there E2E testing framework.
I worked mostly with NodeJS, Selenium, NightWatchJS and core JavaScript.
After that contract ended, I found a job working for a small ecommerce company called HandicappedPets.com.
I was happy to be able to build a tool for them which they now call the <BioLink href="https://www.handicappedpets.com/wheelchair-sizer/" title="SureFit Calculator"/>.
In November 2019, my wife and I moved out to Portland, OR, and soon after our arrival I accepted a position as a software developer at a local SaaS Document Management company called Scan123.
What attracted me to Scan123 was being able to work on a team, rather than just on my own.
During my time at Scan123, I contributed code to every level of the stack; from UI/UX (HTML,CSS, JavaScript), to authentication and validation of user input (PHP), to building and revising our own mySQL query builder.
My largest contribution to Scan123 was building a sphinx search microservice capable of providing real-time search results for over 150 million documents.
The project was very rewarding as it required solving scalability and performance issues in creative ways, while keeping costs to a minimum.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Leaving Scan123</div>
                        <div className="page__paragraph">
As much as I enjoyed the work, I eventually had to accept that I would not be able to sustain myself at the pace that Scan123 required.
Long story short, my wife and I want to settle down and have children, and so having occupations that support that, specifically by encouraging a healthy work/life balance is essential.
After fifteen months with Scan123, I felt that while the work was fulfilling and the compensation more than adequate, what I really needed was a stable 9 to 5 that would allow me to focus on my family while also sustaining us financially.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Currently</div>
                        <div className="page__paragraph">At the moment, I am taking advantage of the time I have out of the office to educate myself on tools that I believe are going to be the future of web development.
Currently these include <BioLink href="https://flask.palletsprojects.com/en/1.1.x/" title="Flask"/> (a python web framework),&nbsp;
<BioLink href="https://roots.io/" title="Roots"/> (a modern WordPress development framework),&nbsp;
and <BioLink href="https://laravel.com/" title="Laravel"/> (a modern opinionated PHP framework).
Since the bible, as a source of encouragement and strength, is important to me, I am in the process of planning to build a text analysis tool that might aid those seeking biblical knowledge to find what they are looking for.
That said, I do need to pay rent, so if you are looking for a intermediate/senior level web/software developer,&nbsp;<NavLink
                        className='cards-header__link'
                        to='/contact'
                        aria-label="Click here to view Walter's Contact form"
                        >please do reach out</NavLink>.
Thanks for taking the time to get to know me, and hope to hear from you soon!
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Bio;
