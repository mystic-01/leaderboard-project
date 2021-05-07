import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './styles';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import About from './components/About/About';
import ViewBoard from './components/ViewBoard/ViewBoard'

import './App.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                    <Route path="/create" component={Create} />
                    <Route path="/view/:boardName" component={ViewBoard} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
