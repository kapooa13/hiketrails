import logo from './logo.svg';
import './App.css';

import Search from './Search';
import UserLogin from './UserLogin';

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

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
              <Typography align="left" variant="h6" component={Link} to={'/'} style={{ textDecoration: 'none', boxShadow: 'none'}}>
{/*                <Link to="/" style={{ textDecoration: 'none', boxShadow: 'none'}}>*/}
                    HikeTrails
              {/*  </Link>*/}
              </Typography>
          <div style={{ flexGrow: 1}}>
          </div>
          <div>
              <Button color="inherit" component={Link} to="/login">
                SampleObject
              </Button>
          </div>
          <div>
              <Button color="inherit" component={Link} to="/login">
                Submissions
              </Button>
          </div>
          <Button variant="contained" color="secondary" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Results() {
    return Home();
}

// function UserLogin() {
//     return Home();
// }

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
        <ThemeProvider theme={theme}>
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
            <Route path='/login'>
                <UserLogin/>
            </Route>
            <Route path='/'>
                <Home/>
            </Route>
        </Switch>
        </div>
        </Router>
        </ThemeProvider>
    );
}

export default App;
