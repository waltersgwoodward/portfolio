import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import NavBar from "./layout/NavBar";

const App = () => {
        return (<Router>
            <NavBar />
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

