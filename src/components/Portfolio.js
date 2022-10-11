import React, { Fragment } from "react";

import NavBar from "./NavBar";
import PortfolioCards from "./Portfolio/Cards";
import Footer from "./Footer";

const Portfolio = () => {
    return (
        <Fragment>
            <NavBar />
            <PortfolioCards />
            <Footer />
        </Fragment>
    );
}

export default Portfolio;
