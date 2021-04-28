import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Create from './components/Create/Create';
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} />
            </Switch>
        </Router>
    );
};

export default App;
