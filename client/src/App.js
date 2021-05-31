import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Provider as AlertProvider } from "react-alert";

import theme from "./styles";
import { options, AlertTemplate } from "./alerts";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import About from "./components/About/About";
import ViewBoard from "./components/ViewBoard/ViewBoard";

import "./App.css";

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/create/:id" component={Create} />
            <Route path="/create" component={Create} />
            <Route path="/view/:id" component={ViewBoard} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AlertProvider>
  );
};

export default App;
