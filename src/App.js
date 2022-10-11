import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

const App = () => {
        return (<Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/portfolio" component={Portfolio} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
        </Router>)
}

export default App;

