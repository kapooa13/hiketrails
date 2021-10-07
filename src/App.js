import './App.css';

import Search from './Search';
import UserLogin from './UserLogin';
import DrawerComponent from './NavbarDrawer';
import useMediaQuery from '@mui/material/useMediaQuery'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Stack from '@mui/material/Stack';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';


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

  const isMobileMatch = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="left" variant="h6" component={Link} to={'/'} style={{ textDecoration: 'none', boxShadow: 'none' }}>
            HikeTrails
          </Typography>
          <div style={{ flexGrow: 1 }}>
          </div>
          {
            isMobileMatch ? (

              <DrawerComponent />
            ) : (
              <Stack spacing={2} direction="row">

                <Button color="secondary" component={Link} to="/addreview">
                  Add Review
                </Button>
                <Button color="secondary" component={Link} to="/results">
                  Search Results
                </Button>
                <Button color="secondary" component={Link} to="/sampleobject">
                  Sample Object
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/login">
                  Login
                </Button>
              </Stack>
            )}
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
      <Typography variant="h2">
        HikeTrails
      </Typography>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <ButtonAppBar />
          <Switch>
            <Route path="/results">
              <Results />
            </Route>
            <Route path='/sampleobject'>
              <SampleObject />
            </Route>
            <Route path='/addreview'>
              <SubmissionPage />
            </Route>
            <Route path='/login'>
              <UserLogin />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
