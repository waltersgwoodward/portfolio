import {
    TOGGLE_DROP_DOWN
} from "../actions";
import { faReact, faJs, faLaravel, faLinux, faPhp } from "@fortawesome/free-brands-svg-icons";

const initialState = {
    projects: {
        "Scan123 Web Application": {
            tool_icons: [faLinux, faPhp],
            title: "Scan123 Web Application",
            frontend_tools: "HTML, JavaScript, SASS",
            backend_tools: "Linux, Nginx, PHP",
            database_tools: "MySQL",
            text: "During my time at Scan123 I worked with a small agile scrum team to build out and maintain two web applications. The first was an internal web application used for employees at Scan123 to monitor client data metrics (primarily billing). The second was their customer facing web application. Highlights of the work I contributed to at Scan123 included building a custom REST framework built with core PHP, building and maintaining a custom mySQL query builder designed to interface with Scan123's unique database structure, and buiding a search microservice using Sphinx Search.",
            deploy_link: "https://scan123.com/"
        },
        "handicapped-pets": {
            tool_icons: [faJs],
            title: "HandicappedPets SureFit Calculator",
            frontend_tools: "JavaScript, WordPress",
            backend_tools: "PHP",
            database_tools: "mySQL",
            text: "A tool that I built in 2019 that customers at handicappedpets.com still use to get the correct sized wheelchair for their pet.",
            deploy_link: "https://www.handicappedpets.com/wheelchair-sizer/",
        },
        "portfolio": {
            tool_icons: [faReact],
            title: "Portfolio Website",
            frontend_tools: "React, Redux, Sass/Scss",
            deployment_tools: "Netlify",
            text: "A web application that I built to make it easier for prospective employers to look at what I am working on and contact me.",
            code_link: "https://github.com/walterswoodward/portfolio",
        },
        // "nine-acre-photography": {
        //     tool_icons: [faLaravel],
        //     title: "Nice Acre Photography",
        //     frontend_tools: "Laravel Blade, VueJS, TailwindCSS",
        //     deployment_tools: "Heroku",
        //     text: "A portfolio web application I am currently in the process of building for a friend. I decided to use Laravel so that transitioning from what it is now (a relatively simple web application) to an online community center in the future will be relatively painless.",
        //     deploy_link: "https://nine-acre-photography.herokuapp.com/",
        //     code_link: "https://github.com/walterswoodward/nine-acre-photography",
        // },
    },
    dropDownOpen: false
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DROP_DOWN:
            return { ...state, dropDownOpen: !state.dropDownOpen };
        default:
            return state;
    }
};
