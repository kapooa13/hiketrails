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

  //  change name of webpage in browser to HikeTrails
  useEffect(() => {
    document.title = 'HikeTrails'
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ButtonAppBar />
          <div className="container">
        {/* Start defining different routes for different pages/componenets*/}
            <Switch>
          {/* Path: "/results" opens the 'ResultsSample' component */}
              <Route path="/results">
                <ResultsSample />
              </Route>
            {/* Path: '/sampleobject' opens the 'SampleObject' component */}
              <Route path='/sampleobject'>
                <SampleObject />
              </Route>
            {/* Path: '/addreview' opens the 'Submission' component */}
              <Route path='/addreview'>
                <Submission />
              </Route>
            {/* Path: '/login' opens the 'Registration' component */}
              <Route path='/login'>
                <Registration />
              </Route>
            {/* Path: '/' opens the 'Home' component */}
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        {/* Footer at the bottom of every page */}
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
