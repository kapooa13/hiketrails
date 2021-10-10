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

// app bar with button when it becomes smaller

export default function ButtonAppBar() {

  // custom breakpoint for responsive appbar
  const isMobileMatch = useMediaQuery("(max-width:700px)");

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
