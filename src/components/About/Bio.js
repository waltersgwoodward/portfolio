import React, { Fragment, PureComponent } from 'react';

class Bio extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className='page'>
                    <div className='page-paragraph__wrap'>
                        <div className="page-paragraph__header">A Programmer Is Born</div>
                        <div className="page__paragraph">It was nearing the end of 2017, and I was in my final semester at seminary.
In my prayers and considerations, I had come to the conclusion that pursuing ministry in a professional or academic setting did not make sense;
however, since I was a child I had always wanted to try my hand at programming.
                        </div>
                    </div>
                    <div className="page-paragraph__wrap">
                        <div className="page-paragraph__header">Coding Education</div>
                        <div className="page__paragraph">From January to August 2018, I enrolled in Lambda School's <a className="text__highlight" href="https://lambdaschool.com/courses/full-stack-web-development">Full Stack Web Development program</a>.
Although Lambda School boasts of teaching much more, in truth I would say that I graduated with a solid basic understanding of JavaScript and some general familiarity with React.
In the months that followed graduation, I threw myself into building a portfolio website and applying to positions.
I was aware that this would be challenging. Athough I do hold a degree in Music from McGill University, without a degree in "Computer Science or related field", my options were very limited (and to a lesser extent still are).
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
