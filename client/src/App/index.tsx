import React from 'react';
import Header from "./Components/Header/header"
import Home from "./Views/Home"
import About from "./Views/About"
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
