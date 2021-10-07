import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function UserLogin() {
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
        width: 300,
        height: 325,
            border: '3px solid rgb(210,210,210)'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
        HikeTrails
      </Typography>
      <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Sign in
      </Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
              <Button color="primary" variant="contained">
                Login
              </Button>
    </Box>
        {/*<Box
          sx={{
            component: 'form',
            display: 'flex',
            width: 300,
            height: 300,
            bgcolor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            border: '3px solid rgb(210,210,210)'
          }}
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>*/}
    </div>
  );
}

