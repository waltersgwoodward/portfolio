import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";

class App extends Component {
    render() {
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
}


export default App;

