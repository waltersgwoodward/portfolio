import React, { Fragment } from "react";

import PortfolioCards from "./Portfolio/Cards";
import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        <Fragment>
            <PortfolioCards />
            <Footer />
        </Fragment>
    );
}

export default Portfolio;
