import React, { Fragment, PureComponent } from 'react';
import { NavLink } from "react-router-dom";

import BioLink from './BioLink';

class Bio extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='page'>
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
Measured up against such standards, I must acknowledge that I do not fulfill the law. Fortunately, God understands this such that in our continued efforts to love as we ought, we can rest in the knowledge of these things:
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
<br/><br/>
I got my first job working with <BioLink href="https://www.theatomgroup.com/" title="The Atom Group"/> in Portsmouth, NH in December 2018.
The job was a contract position working alongside developers at IBM on their E2E testing framework.
When I arrived at The Atom Group, we were introduced to a Node.js, Selenium, and NightWatchJS E2E testing application that had been built by a recent CS graduate.
The structure for the application was there, but many edge cases had not been addressed, libraries utilized were out of date, the code itself was pratically unreadable, and there was no documentation.
In my time with The Atom Group I worked with a team to address all of the above, leaving them with a working application, complete with a Getting Started guide for future developers.
<br/><br/>
Nearing the end of my contract with The Atom Group, I was fortunate to find a job working with a small ecommerce company called <BioLink href="https://www.handicappedpets.com/" title="HandicappedPets.com"/>.
HandicappedPets was looking for a way to cut down on the cost of sales calls by offering an online form that would calculate the correct sized wheelchair for any given breed.
I built a web application using vanilla JavaScript, PHP and mySQL, now called the <BioLink href="https://www.handicappedpets.com/wheelchair-sizer/" title="SureFit Calculator"/> which customers can use to get the correct sized wheelchair for their pet.
Although it has been well over a year since I left HandicappedPets, the SureFit Calculator has continued to serve its purpose, and function as their highest earning source of revenue.
<br/><br/>
In November 2019, my wife and I moved out to Portland, OR, and soon after our arrival I accepted a position as a software developer at a local SaaS Document Management company called <BioLink href="https://scan123.com/" title="Scan123"/>.
During my time at Scan123, I worked in an Agile Scrum environment and contributed code to every level of the stack; from UI/UX (HTML,CSS, JavaScript), to authentication and validation of user input (PHP), to building and revising our own mySQL query builder.
My largest contribution to Scan123 was building a sphinx search microservice capable of providing real-time search results of over 150 million documents.
The project was very rewarding as it required solving scalability and performance issues in creative ways while keeping costs to a minimum.
After fifteen months at Scan123, I decided it was time for a change, and on February 1st, 2021 sent in my resignation letter.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Current Activity</div>
                        <div className="page__paragraph">
I feel a personal responsibility to seek roles that make a positive difference in people's lives.
I am currently looking for a long term, full time position in (or around) the Portland area that I can commit to, and that will support my desire to put down roots and start a family.
In the meantime, I have decided to make a commitment to volunteering at the Portland Rescue Mission; a community that helps homeless people get back on their feet.
Working at PRM and witnessing the generosity of staff and volunteers helping those most in need brings me great joy.
I consider it a real privilege to be part of such an important service here in Portland.
When I am not volunteering, I am continuing to teach myself various foundational web development technologies that I hope will help me in my next full time position.
If you are interested in hiring me, or just want to say hi, please use my <NavLink to="/contact" className="cards-header__link">Contact Page</NavLink>. Thank You for your time!
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Bio;
