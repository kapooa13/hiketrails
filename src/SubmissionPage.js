import * as React from 'react';
import { Box, Input, Rating, Button, Typography, TextField, useMediaQuery } from '@mui/material';

export default function SubmissionPage() {

  const [value, setValue] = React.useState(0);
  const isMobileMatch = useMediaQuery("(max-width:600px)");

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: '5%',
    }}>
      <Box
        component="form"
        sx={{
          // border: 1,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '90%',
          maxWidth: '800px',
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{
          display: 'flex',
          width: '100%',
          flexDirection: isMobileMatch ? 'column' : 'nowrap',
          flexWrap: isMobileMatch ? 'wrap' : 'none',
          alignContent: 'center',
          justifyContent: 'center'
        }}>

          <Box sx={{
            display: 'flex',
            flexGrow: 1,
            alignContent: 'center',
            justifyContent: 'left',
          }}>
            <Typography align="center" variant="h4"  >
              Write a review!
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            flexGrow: 1,
            alignContent: 'center',
            justifyContent: isMobileMatch ? 'center' : 'right',
            marginTop: '1%'
          }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>


        </Box>
        <Box sx={{
          display: 'flex',
          marginTop: '5%',
          padding: '10px',
          justifyContent: 'center'
        }}>
          <TextField
            sx={{ width: '100%', maxWidth: '800px' }}
            id="outlined-basic"
            label="Name of trail"
            variant="outlined"
          />
        </Box>
        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'center'
        }}>
          <TextField
            sx={{ width: '100%', maxWidth: '800px' }}
            id="outlined-basic"
            label="Description"
            multiline="true"
            minRows="5"
            variant="outlined"
          />
        </Box>

        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'center'
        }}>
          <TextField
            sx={{ width: '100%', maxWidth: '800px' }}
            id="outlined-basic"
            label="Latitude"
            variant="outlined"
          />
          <TextField
            sx={{ width: '100%', maxWidth: '800px' }}
            id="outlined-basic"
            label="Longitude"
            variant="outlined"
          />
        </Box>
        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'space-around'
        }}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'space-around'
        }}>
          <Button
            width='20%'
            size='large'
            variant='contained'>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}