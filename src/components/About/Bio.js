import React, { Fragment, PureComponent } from 'react';
import { NavLink } from "react-router-dom";

class Bio extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='page'>
                    <div className='page-paragraph__wrap'>
                        <div className="page-paragraph__header">Before Programming</div>
                        <div className="page__paragraph">I grew up in and around Boston, MA. I love music, which led me to pursuing a Bachelor of Music at McGill University.
After McGill I spent a lot of time in academia searching for something that I could really see myself committing to.
Among other things I considered sound engineering, accounting, organic farming, and plant pathology.
During this time I also served as an Army Reserve Bandsman with the 215th Army Band in Fall River, MA for six years.
                        </div>
                    </div>
                    <div className='page-paragraph__wrap'>
                        <div className="page-paragraph__header">Coming to Faith</div>
                        <div className="page__paragraph">Following my grandfather's death in 2004, I became very interested in the Bible and the Christian faith.
I was baptized in 2013, and with the support of my home church enrolled in the Master of Arts in Theology program at Gordon Conwell Theological Seminary the following year.
In my final semester (fall of 2017) of seminary, I came to the conclusion that pursuing ministry in a professional or academic setting was not the path for me.
Despite my commitment to the Christian faith, it was clear that the gifts God had given me were more in the direction of engineering and less in the direction of a community/spiritual leader.
I took a few online courses through Code Academy and Udacity, and discovered that I had a genuine passion for programming.
The more I thought about it, the more it made sense to pursue software engineering, and so I decided to enroll in a coding bootcamp.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Coding Education</div>
                        <div className="page__paragraph">From January to August 2018, I attended Lambda School's <a className="cards-header__link " href="https://lambdaschool.com/courses/full-stack-web-development">Full Stack Web Development program</a>.
I graduated with a basic understanding of JavaScript, some general familiarity with React, and exposure to all the fundamental disciplines required of a full stack web developer.
In the months that followed graduation, I threw myself into building a portfolio website for prospective employers interested in me and my skills as a developer.
After looking around a bit, I decided to work through freeCodeCamp's curriculum (which was awesome and I highly recommend it!). Between freeCodeCamp, CodeWars, and just lots of reading, by the time I did get my first job, I felt pretty confident in my programming abilities.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Work Experience</div>
                        <div className="page__paragraph">After three and a half months, my persistance paid off and I got a job working with <a className="cards-header__link " href="https://www.theatomgroup.com/">The Atom Group</a> in Portsmouth, NH. The job was a contract position working along side developers at IBM on there E2E testing framework.
I worked mostly with NodeJS, Selenium, NightWatchJS and core JavaScript.
After that contract ended, I found a job working for a small ecommerce company called HandicappedPets.com.
I was happy to be able to build a tool for them which they now call the <a className="cards-header__link " href="https://www.handicappedpets.com/wheelchair-sizer/">"SureFit Calculator"</a>.
In November 2019, my wife and I moved out to Portland, OR, and I accepted a position as a software developer at a local SaaS Document Management company called Scan123.
What attracted me to Scan123 was being able to work on a team, rather than just on my own.
Futhermore, the lead developer was adamant about limiting the introduction of third party dependencies, which if you are trying to establish a long term sustainable SaaS, is essential.
During my time at Scan123, I contributed code to every level of the stack; from UI/UX (HTML,CSS, JavaScript), to authentication and validation of user input (PHP), to building and revising our own mySQL query builder.
After fifteen months with Scan123, I felt it was time for me to seek new opportunities.
Having worked extensively within the LEMP stack, I wanted to commit more time to investigating more popular web development solutions like AWS and Python.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Currently</div>
                        <div className="page__paragraph">At the moment, I am taking advantage of the time I have out of the office to educate myself on tools that I believe are going to be the future of web development.
For the past few weeks I have been teaching myself Flask (Python Micro Web Framework), Go, and AWS
That said, I do need to pay rent, so if you are looking for an intermediate level web/software developer,&nbsp;<NavLink
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
