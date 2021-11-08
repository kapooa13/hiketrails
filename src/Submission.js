import * as React from 'react';
import { Box, Input, Rating, Button, Typography, TextField, useMediaQuery } from '@mui/material';

// basic submissions page to write review
// fill in rating name location etc.

export default function Submission() {

  const [lat, setLat] = React.useState('');
  const [long, setLong] = React.useState('');
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState(0);
  const isMobileMatch = useMediaQuery("(max-width:600px)");

  const [nameInvalid, setNameInvalid] = React.useState(0);
  const [latInvalid, setLatInvalid] = React.useState(0);
  const [longInvalid, setLongInvalid] = React.useState(0);

  function validateName() {
    setNameInvalid(name == '');
  }

  function validateLat() {
    let latValid = -90 <= lat && lat <= 90;
    setLatInvalid(lat === "" || isNaN(lat) || !(latValid));
  }

  function validateLong() {
    let longValid = -180 <= long && long <= 180;
    setLongInvalid(long === "" || isNaN(long) || !(longValid));
  }

  function validateRating() {
    if (value == 0) {
      alert('Please set a rating!');
    }
  }

  function handleSubmission(event) {
    validateName();
    validateLat();
    validateLong();
    validateRating();
  }

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
          maxWidth: '900px',
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
            error={nameInvalid}
            sx={{ width: '100%', maxWidth: '900px' }}
            id="outlined-basic"
            label="Name of trail"
            variant="outlined"
            value={name}
            onChange={event => setName(event.target.value)}
            helperText={nameInvalid ? "Name can't be empty" : ""}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'center'
        }}>
          <TextField
            sx={{ width: '100%', maxWidth: '900px' }}
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
            error={latInvalid}
            sx={{ width: '100%', maxWidth: '900px' }}
            id="outlined-basic"
            label="Latitude"
            variant="outlined"
            value={lat}
            onChange={event => setLat(event.target.value)}
            helperText={latInvalid ? "Enter a valid latitude between -90 and 90" : ""}
          />
          <TextField
            error={longInvalid}
            sx={{ width: '100%', maxWidth: '900px' }}
            id="outlined-basic"
            label="Longitude"
            variant="outlined"
            value={long}
            onChange={event => setLong(event.target.value)}
            helperText={longInvalid ? "Enter a valid longitude between -180 and 180" : ""}
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
            variant='contained'
            onClick={() => {
              navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });
            }}
          >
            Use current location
          </Button>
          <Button
            width='20%'
            size='large'
            variant='contained'
            onClick={event => handleSubmission(event)}
            >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}