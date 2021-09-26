import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home'
import About from './about';
import Contact from './contact';

 function App() {
    return (
        <Router>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            
            </Switch>
        </Router>
    )
}


export default App;
