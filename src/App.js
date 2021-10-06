import logo from './logo.svg';
import './App.css';

import Search from './Search';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HikeTrails 
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Results() {
    return Home();
}

function SampleObject() {
    return Home();
}

function SubmissionPage() {
    return Home();
}

function Home() {
    return (
                    <div className="home__body">
{/*                <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="logo"
                width="200"
                />
*/}                
                <Typography variant="h2">
                    HikeTrails
                </Typography>
                <div className="home__inputContainer">
                    <Search/>
                </div>
            </div>
    );
}

function App() {
    return (
        <Router>
        <div className="App">
            <ButtonAppBar/>
        <Switch>
            <Route path="/results">
                <Results/>
            </Route>
            <Route path='/sampleobject'>
                <SampleObject/>
            </Route>
            <Route path='/submission'>
                <SubmissionPage/>
            </Route>
            <Route path='/'>
                <Home/>
            </Route>
        </Switch>
        </div>
        </Router>
    );
}

export default App;
