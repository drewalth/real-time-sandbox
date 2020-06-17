import React from 'react';
import Header from "./Components/Header/header"
import Article from "./Components/Article/article"
import Ticker from "./Components/Ticker/ticker"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div>
            <Ticker />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
