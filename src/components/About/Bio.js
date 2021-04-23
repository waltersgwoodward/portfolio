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
                        </div>
                    </div>
                    <div className="page-paragraph__wrap hide">
                        <div className="page-paragraph__header">Faith</div>
                        <div className="page__paragraph">I understand the world and myself through a biblical lens; however, working in the tech industry, I have come to accept that this isn't always seen in a positive light.
For that reason, I offer this short defense for my faith.
                        </div>
                        <div className="page__paragraph">The Bible is interpretted and used in a myriad of ways, and certainly has been and continues to be used for countless evils in the world.
                            <div className="page__paragraph">Yet, within its pages you can find these words:
                                <div className="page__paragraph highlight__text">The <b>entire</b> law is fulfilled in a single decree: "Love your neighbor as yourself" (Galatians 5:14)</div>
                                <div className="page__paragraph highlight__text">Above all, love one another deeply, because love covers over a multitude of sins. (1 Peter 4:8)</div>
                            </div>
                            <div className="page__paragraph">If you recognize these words to be true, then perhaps, like me, you'll find the rest of this argument compelling.
Measured up against such standards, I must acknowledge that I do not fulfill the law. Fortunately, God understands this such that in our continued efforts to love as we aught, we can rest in the knowledge of these things:
                                <div className="page__paragraph highlight__text">For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.
Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God.
And this is the judgment: the light has come into the world, and people loved the darkness rather than the light because their works were evil.
For everyone who does wicked things hates the light and does not come to the light, lest his works should be exposed.
But whoever does what is true comes to the light, so that it may be clearly seen that his works have been carried out in God. (John 3:13-16)</div>
                            </div>
                        </div>
                        <div className="page__paragraph">Of course, these are hard truths to accept.
According to the scriptures, impossible, without divine intervention (1 Corinthians 2:14).
Though most will disagree, I would submit that the message of the Bible is indeed one of hope, healing, and love.
I maintain that belief while acknowledging that the symbols, banners, and cultures we associate with Christianity have been and continue to be used, more often than not, as tools to enslave, rather than liberate.
The word of God cuts through all of that and points to something deeper, something living, and something freely available to you and me:
                            <div className="page__paragraph highlight__text">Come to me, all you who are weary and burdened, and I will give you rest.
Take my yoke upon you and learn from me, for I am gentle and humble of heart; and you will find rest.
For my yoke is easy, and my burden light. (Matthew 11:25-30)</div>
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
