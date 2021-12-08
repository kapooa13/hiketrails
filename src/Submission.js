import * as React from 'react';
import { Box, Input, Button, Typography, TextField, useMediaQuery } from '@mui/material';

import { postRequest, uploadImage, DEFAULT_IMAGE } from './Backend';

import { useHistory
 } from "react-router-dom";

// basic submissions page to write review
// fill in rating name location etc.

export default function Submission() {

  const history = useHistory();

  // values and setters for different fields in forms
  //  useState creates a value and a setter for it that we can use
  const [lat, setLat] = React.useState('');
  const [long, setLong] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState(null);
  // breakpoint for mobile view
  const isMobileMatch = useMediaQuery("(max-width:600px)");

  // values and setter for conditionally showing validation
  const [nameInvalid, setNameInvalid] = React.useState(false);
  const [descInvalid, setDescInvalid] = React.useState(false);
  const [latInvalid, setLatInvalid] = React.useState(false);
  const [longInvalid, setLongInvalid] = React.useState(false);

  // name validation function
  function validateName() {
    setNameInvalid(name === '');
    return (!(name === ''));
  }

  // description validation function
  function validateDesc() {
    setDescInvalid(description === '');
    return (!(description === ''));
  }

  // latitude valdiation function
  function validateLat() {
    let latValid = -90 <= lat && lat <= 90;
    let updatedLatInvalid = lat === "" || isNaN(lat) || !(latValid);
    setLatInvalid(updatedLatInvalid);
    return (!(updatedLatInvalid));
  }

  // longitude validation function
  function validateLong() {
    let longValid = -180 <= long && long <= 180;
    let updatedLongInvalid = long === "" || isNaN(long) || !(longValid);
    setLongInvalid(updatedLongInvalid);
    return (!(updatedLongInvalid));
  }

  // function to handle submission, calls all validation functions
  function validateSubmission() {
    let validName = validateName();
    let validDesc = validateDesc();
    let validLat = validateLat();
    let validLong = validateLong();
    return (validName && validDesc && validLat && validLong);
  }

  function postInfoToDatabase() {
    if (image !== null) {
      uploadImage(image).then(
        (response) => {
          uploadHelper(response.data)
        }
        ,
        (error) => {
          uploadHelper(DEFAULT_IMAGE);
        }
      );
    } else {
      uploadHelper(DEFAULT_IMAGE);
    }
  }

  function uploadHelper(image_url) {
    let validSubmission = validateSubmission();
    if (validSubmission) {
      let postParams = {
        'lat': lat,
        'long': long,
        'trail_name': name,
        'desc': description,
        'image_url': image_url
      };
      postRequest(postParams, 'add_trail_review.php').then(
        (response) => {
          console.log(response);
          history.push('/results', { data: name });
        }
        ,
        (error) => {
          console.log(error);
        }
      )
    }
  }

  function handleSubmission() {
    let validSubmission = validateSubmission();
    if (validSubmission) {
      postInfoToDatabase();
    }
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
      {/* Box to organize form */}
      <Box
        component="form"
        sx={{
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
        {/* Heading defined here "Add a trail!" */}
          <Box sx={{
            display: 'flex',
            flexGrow: 1,
            alignContent: 'center',
            justifyContent: 'left',
          }}>
            <Typography align="center" variant="h4"  >
              Add a trail!
            </Typography>
          </Box>
        </Box>
      {/* Name input field */}
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
      {/* Description input field, needs no validation */}
        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'center'
        }}>
          <TextField
            error={descInvalid}
            sx={{ width: '100%', maxWidth: '900px' }}
            id="outlined-basic"
            label="Description"
            multiline="true"
            value={description}
            onChange={event => setDescription(event.target.value)}
            minRows="5"
            variant="outlined"
            helperText={descInvalid ? "Description cannot be empty" : ""}
          />
        </Box>
      {/* Latitude and longitude input field */}
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
              accept=".jpeg,.png,.jpg"
              id="image"
              name="image"
              multiple type="file" 
              onChange={event => 
                setImage(event.target.files[0])
              }
            />
          </label>
        </Box>
      {/* Use geolocation API to automatically fill location for user*/}
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
        {/* Submission button calls all validation functions */}
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