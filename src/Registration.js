import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HTLogo from './assets/hiketrails-logo-mini.svg';

// user login and registration page

export default function Registration() {
  return (
      <div style={{
          position: 'absolute', 
          left: '50%', 
          top: '45%',
          transform: 'translate(-50%, -50%)'
      }}>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        width: '100%',
        height: '100%',
        maxWidth: 350,
        minWidth: 320,
        maxHeight: 450,
            border: '3px solid rgb(210,210,210)'
      }}
      noValidate
      autoComplete="off"
    >
      <div align="center" style={{ width: '95%'}}>
        <div align="center">
        <img src={HTLogo} alt="logo" width="80px" height="auto"/>
        </div>
        <Typography align="center" variant="h4" component="div" sx={{ flexGrow: 1 }}>
          HikeTrails
        </Typography>
        <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1, paddingTop: '15px' }}>
          Sign in
        </Typography>
      </div>
      <TextField id="username" style={{ width: '80%'}} label="Username" variant="outlined" type="email"/>
      <TextField id="password" style={{ width: '80%'}} label="Password" variant="outlined" type="password" />
      <Grid container style={{ width: '100%', paddingTop: '5px' }}>
        <Grid item xs={6} md={6}>
          <Button color="primary" variant="outlined" style={{ marginBottom: '30px'}}>
            Register 
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button color="primary" variant="contained" style={{ marginBottom: '30px'}}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

