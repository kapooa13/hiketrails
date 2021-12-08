import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HTLogo from './assets/hiketrails-logo-mini.svg';

import { postRequest } from './Backend';
import UserProfile from './UserProfile';

import { useHistory } from "react-router-dom";
// user login and registration page

export default function Registration() {

  const history = useHistory();

  // values and setters for username and password
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [value, setValue] = React.useState(0);

  // values and setters for error states and conditonally showing errors
  const [userInvalid, setUserInvalid] = React.useState(0);
  const [passInvalid, setPassInvalid] = React.useState(0);

  // username email validator
  // works using regex
  function validateUser() {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setUserInvalid(!(regexp.test(user)));
  }

  // password validator
  // performs client side validation to ensure that
  //    a) length of password is greater than 8
  //    b) password contains at least 1 number
  function validatePass() {
    let validLength = pass.length >= 8;
    let containsNumber = /\d/.test(pass);
    setPassInvalid(!(validLength && containsNumber));
  }

  function validateFields() {
    validateUser();
    validatePass();
  }

  function handleRegistration() {
    validateFields();
    if (!userInvalid && !passInvalid) {
      postRequest({ 'username' : user, 'password' : pass }, 'register.php').then(
        (response) => {
          console.log(response);
        }
        ,
        (error) => {
          console.log(error);
        }
      );
    }
  }

  function handleLogin() {
    validateFields();
    if (!userInvalid && !passInvalid) {
      postRequest({ 'username' : user, 'password' : pass }, 'login.php').then(
        (response) => {
          UserProfile.setName(response.data.username);
          UserProfile.setUserId(response.data.user_id);
          UserProfile.setLoggedIn(response.data.successful);
          setValue(value + 1);
          history.push('/', {}); }
        ,
        (error) => {
          console.log(error);
        }
      );
    }
  }

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
      <TextField
        error={userInvalid}
        id="username" 
        style={{ width: '80%'}} 
        label="User Email" 
        variant="outlined" 
        type="email"
        value={user}
        onChange={event => setUser(event.target.value)}
        helperText={userInvalid ? "Please enter a valid email" : ""}
      />
      <TextField 
        error={passInvalid}
        id="password" 
        style={{ width: '80%'}} 
        label="Password" 
        variant="outlined" 
        type="password"
        value={pass}
        onChange={event => setPass(event.target.value)}
        helperText={passInvalid ? "Please enter a password with minimum 8 characters and 1 number" : ""}
      />
      <Grid container style={{ width: '100%', paddingTop: '5px' }}>
        <Grid item xs={6} md={6}>
          <Button 
            color="primary" 
            variant="outlined" 
            style={{ marginBottom: '30px'}}
            onClick={event => handleRegistration(event)}>
            Register 
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button 
            color="primary" 
            variant="contained" 
            style={{ marginBottom: '30px'}}
            onClick={event => handleLogin(event)}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

