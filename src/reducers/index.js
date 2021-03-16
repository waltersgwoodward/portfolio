import {
    TOGGLE_DROP_DOWN
} from "../actions";
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";

const initialState = {
    projects: {
        "hanidcapped-pets": {
            tool_icons: [faJs],
            title: "HandicappedPets Wizard Sizer",
            frontend_tools: "JavaScript, WordPress",
            backend_tools: "PHP, phpMyAdmin",
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
        //     backend_tools: "Laravel Eloquent ORM",
        //     database_tools: "mySQL",
        //     deployment_tools: "Heroku",
        //     text: "(in progress) A photography website I built and maintain for a friend",
        //     deploy_link: "https://nine-acre-photography.herokuapp.com/",
        //     deploy_link_icon: faLink,
        //     code_link: "https://github.com/walterswoodward/nine-acre-photography",
        //     code_link_icon: faGithub
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
