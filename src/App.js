import './App.css';
import HTLogo from './hiketrails-logo-cropped.svg';

import Search from './Search';
import UserLogin from './UserLogin';
import SubmissionPage from './SubmissionPage';
import SampleObject from './SampleObject';
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
import { AppBar, Box, Fab, Toolbar, Typography, Button, SvgIcon, Icon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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


function ButtonAppBar() {

  const isMobileMatch = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*<Typography align="left" variant="h6" component={Link} to={'/'} style={{ textDecoration: 'none', boxShadow: 'none' }}>
            HikeTrails
          </Typography>*/}
          <Fab size="large" variant="extended" color="white" aria-label="edit">
            {/*HT*/}
            <div>
              <img src={HTLogo} alt="logo" width="60px"/>
            </div>
            <div color='#32a850'>
              HT
{/*              <Typography align="right" color="primary" variant="h6" component={Link} to={'/'} style={{ textDecoration: 'none', boxShadow: 'none' }}>
                HT
              </Typography>
*/}            </div>
          </Fab>
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

function Home() {
  return (
    <div className="home__body">
      <div>
        <img src={HTLogo} alt="logo" width="210px"/>
      </div>
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
