import React from 'react';

import {
  AppBar,
  Box,
  Fab,
  Toolbar,
  Button,
  Stack
} from '@mui/material';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery'

import NavbarDrawer from './NavbarDrawer';
import HTLogo from './assets/hiketrails-logo-mini.svg';
import UserProfile from './UserProfile';
import { useHistory } from 'react-router-dom';

// app bar with button when it becomes smaller

export default function ButtonAppBar() {

  const history = useHistory();
  // custom breakpoint for responsive appbar
  const isMobileMatch = useMediaQuery("(max-width:700px)");
  const [isLoggedIn, setLoggedIn] = React.useState(UserProfile.getLoggedIn());

  function logout() {
    UserProfile.logout()
    UserProfile.setLoggedIn(false);
    setLoggedIn(false);
    history.push('/', {});
  }

  function guestView() {
    return <Stack spacing={2} direction="row">
                <Button variant="contained" color="secondary" component={Link} to="/login">
                  Login
                </Button>
              </Stack>
  }

  function loggedInView() {
    return <Stack spacing={2} direction="row">
        {/* Links to different componenets in toolbar */}
          <Button color="secondary" component={Link} to="/addtrail">
            Add Review
          </Button>
        <Button variant="contained" color="secondary" onClick={(event) => {logout()}}>
          Logout
        </Button>
      </Stack>
  }


  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      {/* App bar used at top of screen to display different options*/}
      <AppBar position="static">
        <Toolbar>
      {/* Boxes to organize the logo*/}
          <Fab sx={{ width: '105px' }} size="large" variant="extended" color="white" aria-label="edit" component={Link} to={'/'} style={{ textDecoration: 'none', boxShadow: 'none' }}>
            <Box sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              marginTop: '12%'
            }}>
              <Box sx={{ display: 'flex' }}>
                <img src={HTLogo} alt="logo" width="60px" height="32px" />
              </Box >
              <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }} color='#32a850'>
                <font size="+1"><b> HT </b></font>
              </Box>
            </Box>
          </Fab>
          <div style={{ flexGrow: 1 }}>
          </div>
          {
            // if mobile view, then show drawer, otherwise full appbar
            isMobileMatch ? (
              <NavbarDrawer />
            ) : (isLoggedIn ? loggedInView() : guestView()) }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
