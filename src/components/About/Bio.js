import React, { Fragment, PureComponent } from 'react';
import { NavLink } from "react-router-dom";

import BioLink from './BioLink';

class Bio extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='page'>
                    <div className="image__inkscape"></div>
                    <div className="page-paragraph__wrap hide">
                        <div className="page-paragraph__header">Coding Philosophy</div>
                        <div className="page__paragraph">My coding philosophy (which is still very much in development)
is largely influenced by the contents of <BioLink href="http://www.catb.org/esr/writings/taoup/html/" title='"The Art of UNIX Programming" by Eric S. Raymond'/>.
While most of the programming I do is done in interpretted languages, UNIX philosophy has become the non-standard standard of excellence that I strive for.
I hesitate to comment further on the subject, but will say that in addition to the benefits of learning from wiser, more experienced programmers, this work has reminded me to not lose sight of the joy of artful programming;
without which, I would have given up on this career path a long time ago.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap hide">
                        <div className="page-paragraph__header">Faith</div>
                        <div className="page__paragraph">At my core, I understand the world through a biblical lens.
Working in the tech industry, I have come to accept that this isn't always seen in a positive light. For that reason, I offer this short defense for my faith along with an explanation for why I don't believe it to be in conflict with most work environments.
                        </div>
                        <div className="page__paragraph">The Bible is interpretted and used in a myriad of ways, and certainly has been at the center of countless evils in this world.
                            <div className="page__paragraph">Yet, within its pages you can find these words:
                                <div className="page__paragraph highlight__text">The entire law is fulfilled in a single decree: "Love your neighbor as yourself" (Galatians 5:14)</div>
                                <div className="page__paragraph highlight__text">Above all, love one another deeply, because love covers over a multitude of sins. (1 Peter 4:8)</div>
                            </div>
                        </div>
                        <div className="page__paragraph">Though many will disagree, I would submit that the message of the Bible is indeed one of hope, healing, and love.
I maintain that belief while also acknowledging what appear to be an abundance of issues and inconsistencies in the Bible.
I maintain that belief while acknowledging that the symbols, banners, and cultures we associate with Christianity have been and continue to be used, more often than not, as tools to enslave, rather than liberate.
With regard to work, it is common to hear colleagues, friends, and family speak of the necessity of work for financial stability, to keep the mind active, or because it is "the right thing to do", but I would submit that with a sustainable balance between one's work and personal life, work can be all those things and more.
As the Apostle Paul writes, <span className="highlight__text">"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward (Colossians 3:23)</span>.
I believe that Adam and Eve's occupation as gardeners before the fall, together with our own experience, both testify to the truth that work and the <b>dignity</b> it provides, were always intended to be a good thing for mankind to enjoy.
We are nevertheless burdened by many fears, which drive us apart from one another, even ourselves, and make working together, at times, incredibly difficult.
It is my reliance on and belief that Christ that has been and continues to be my guide in navigating through these challenges.
I have found that this has only made me more of an asset wherever I have worked.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Web Development Experience</div>
                        <div className="page__paragraph">From January to August 2018, I attended <BioLink href="https://lambdaschool.com/courses/full-stack-web-development" title="Lambda School's Full Stack Web Development program"/>.
I graduated with a basic understanding of JavaScript, some general familiarity with React, and exposure to all the fundamental disciplines required of a full stack web developer.
I got my first job working with <BioLink href="https://www.theatomgroup.com/" title="The Atom Group"/> in Portsmouth, NH in December 2018.
The job was a contract position working alongside developers at IBM on their E2E testing framework.
Most of my work was done in NodeJS as well as Selenium and NightWatchJS.
After that contract ended, I was fortunate to be able to work with a small ecommerce company called <BioLink href="https://www.handicappedpets.com/" title="HandicappedPets.com"/>.
During my time with HandicappedPets, I built a tool for them which they now call the <BioLink href="https://www.handicappedpets.com/wheelchair-sizer/" title="SureFit Calculator"/>.
In November 2019, my wife and I moved out to Portland, OR, and soon after our arrival I accepted a position as a software developer at a local SaaS Document Management company called <BioLink href="https://scan123.com/" title="Scan123"/>.
During my time at Scan123, I worked in an Agile Scrum environment and contributed code to every level of the stack; from UI/UX (HTML,CSS, JavaScript), to authentication and validation of user input (PHP), to building and revising our own mySQL query builder.
My largest contribution to Scan123 was building a sphinx search microservice capable of providing real-time search results of over 150 million documents.
The project was very rewarding as it required solving scalability and performance issues in creative ways while keeping costs to a minimum.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Current Activity</div>
                        <div className="page__paragraph">After fifteen months at Scan123, it was clear to me that I needed a change. 
Unfortunately, by the time I made the decision to leave, I felt burnt out, and emotionally exhausted.
At first, I thought I would just jump right back into working with another company however, after a couple months of project building and interviews, I had to acknowledge that I needed to just take some time off.
I needed time to process and grieve the loss of the community, the colleagues, and the hopes that I had had for Scan123.
I needed time to re-establish in my mind why work is important, beyond just the prospect of money or learning new and exciting things.
In considering how I might do this, I stumbled upon the Portland Rescue Mission, a community that helps homeless people get back on their feet.
I'm now working as a volunteer and am very excited to be a part of such an important service here in Portland.
When I am not volunteering, I am continuing to teach myself various foundational technologies that I hope will help me in my next full time position.
If you are interested in hiring me, or just want to say hi, please use my <NavLink to="/contact" className="cards-header__link">Contact Page</NavLink>. Thank You for your time!
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Bio;
