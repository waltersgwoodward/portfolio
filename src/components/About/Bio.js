import React, { Fragment, PureComponent } from 'react';

class Bio extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='page'>
                <div className='page-paragraph__wrap'>
                        
                        <div className="page-paragraph__header">Before Programming</div>
                        <div className="page__paragraph">I grew up in and around Boston, MA. I loved music, which led me to pursuing a Bachelor of Music at McGill University.
After McGill I spent a lot of time in academia searching for something that I could really see myself committing to. Among other things I considered sound engineering, accounting, organic farming, and plant pathology. 
                        </div>
                    </div>
                    <div className='page-paragraph__wrap'>
                        
                        <div className="page-paragraph__header">Coming to Faith</div>
                        <div className="page__paragraph">Since my grandfather's death in 2008, I had become increasingly interested in the bible and the Christian faith.
I was baptized in 2013, and enrolled the following year as a Master of Arts in Theology student at Gordon Conwell Theological Seminary.
I don't want to make light of this decision, but just because it doesn't directly apply to Full Stack Web Development, I won't linger on the subject.
It is one part of my story that deviates substantially from the stereotypical millenial programmer's story.
The older I get, the more thankful I am that that is the case.
At any rate, back to programming.
It was nearing the end of 2017, and I was in my final semester at seminary.
In my prayers and considerations, I came to the conclusion that pursuing ministry in a professional or academic setting was not in the cards for me.
To parse that out a bit, I felt that despite my commitment to the Christian faith, that I lacked key attributes that I recognized were essential for being an effective pastor.
At the same time, I found myself getting excited about the possiblity of establishing myself as a programmer, so I went for it.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Coding Education</div>
                        <div className="page__paragraph">From January to August 2018, I enrolled in Lambda School's <a className="text__highlight" href="https://lambdaschool.com/courses/full-stack-web-development">Full Stack Web Development program</a>.
Although Lambda School boasts of teaching much more, in truth I would say that I only graduated with a basic understanding of JavaScript and some general familiarity with React.
In the months that followed graduation, I threw myself into building a portfolio website for prospective employers interested in me and my skills as a developer.
After looking around a bit, I decided to work through freeCodeCamps curriculum (which was awesome and I highly recommend it!). Between freeCodeCamp, CodeWars, and just lots of reading, by the time I did get my first job, I felt pretty confident in my abilities.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Work Experience</div>
                        <div className="page__paragraph">After three and a half months, my persistance paid off and I got a job working with <a className="text__highlight" href="https://www.theatomgroup.com/">The Atom Group</a> in Portsmouth, NH. The job was a contract position working along side developers at IBM on there E2E testing framework.
I worked mostly with NodeJS, Selenium, NightWatchJS and core JavaScript.
After that contract ended, I found a job working for a small ecommerce company called HandicappedPets.com.
I was happy to be able to build a tool for them which they now call the <a className="text__highlight" href="https://www.handicappedpets.com/wheelchair-sizer/">"SureFit Calculator"</a>.
In November 2019, my wife and I moved out to Portland, OR, and I accepted a position as a software developer at a local SaaS Document Management company called Scan123.
What attracted me to Scan123 was being able to work on a team, rather than just on my own.
Futhermore, the lead developer was adoment about limiting the introduction of third party dependencies, which if you are trying to establish a long term sustainable SaaS, is essential.
During my time at Scan123, I contributed code to every level of the stack; from UI/UX (HTML,CSS, JavaScript), to authentication and validation of user input (PHP), to building and revising our own mySQL query builder.
After fifteen months with Scan123, I felt it was time for me to seek new opportunities. Having a solid foundation in PHP, I was interested in learning about their popular frameworks, namely Laravel, and also learning more about Python, which is such an elegantly designed language, and one that I have, when given the opportunity, always enjoyed.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Currently</div>
                        <div className="page__paragraph">At the moment, I am continuing to work on a few side projects, and also taking the time I have to educate myself on some of the tools of interest I mentioned above. I would say most of what I am working on falls into the realm of PHP and Python Frameworks. That said, I do need to pay rent, so if you have read through to this point, and are looking for an intermediate level web/software developer, please do reach out. Thanks for taking the time to read about my journey!
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Bio;
