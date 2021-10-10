import React, { useEffect } from 'react';

import './App.css';
import Home from './Home';
import Footer from './Footer';
import Submission from './Submission';
import ButtonAppBar from './ButtonAppbar';
import Registration from './Registration';
import ResultsSample from './ResultsSample';
import SampleObject from './IndividualSample';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

// primary theme used throughout website

const theme = createTheme({
  palette: {
    primary: {
      light: '#5BB973',
      main: '#32a850',
      dark: '#237538',
      contrastText: '#fff',
    },
    secondary: {
      light: '#60BFDF',
      main: '#39afd8',
      dark: '#277A97',
      contrastText: '#000',
    },
  },
});

// describes layout of application with different pages for each url

export default function App() {

  useEffect(() => {
    document.title = 'HikeTrails'
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ButtonAppBar />
          <div className="container">
            <Switch>
              <Route path="/results">
                <ResultsSample />
              </Route>
              <Route path='/sampleobject'>
                <SampleObject />
              </Route>
              <Route path='/addreview'>
                <Submission />
              </Route>
              <Route path='/login'>
                <Registration />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
