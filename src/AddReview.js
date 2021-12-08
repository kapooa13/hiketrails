import * as React from 'react';
import { Box, Rating, Button, Typography, TextField, useMediaQuery } from '@mui/material';

// basic submissions page to write review
// fill in rating name location etc.
import { useHistory
 } from "react-router-dom";

import { postRequest } from "./Backend";
import UserProfile from "./UserProfile";

export default function AddReview() {

  const history = useHistory();
  const trail_data = history.location.state.data;
  // values and setters for different fields in forms
  const [desc, setDesc] = React.useState('');
  const [value, setValue] = React.useState(0);
  // breakpoint for mobile view
  const isMobileMatch = useMediaQuery("(max-width:600px)");

  // values and setter for conditionally showing validation
  const [descInvalid, setdescInvalid] = React.useState(0);

  // name validation function
  function validateDesc() {
    setdescInvalid(desc === '');
    return (!(desc === ''))
  }

  // rating validation function
  function validateRating() {
    if (value === 0) {
      alert('Please set a rating!');
    }
    return (value !== 0)
  }

  // function to handle submission, calls all validation functions
  function handleSubmission(event) {
    let validDesc = validateDesc();
    let validRate = validateRating();
    if (validDesc && validRate) {
      let postParams = {
        'trail_id' : trail_data.trail_id,
        'user_id': UserProfile.getUserId(),
        'username': UserProfile.getName(),
        'rating' : value,
        'desc' : desc
      }
      console.log('post params are');
      console.log(postParams);
      postRequest(postParams, 'add_review.php').then(
        (response) => {
          history.push('/sampleobject',{ data: trail_data })
        }
        ,
        (error) => {
          console.log(error);
        }
      )
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
        {/* Heading defined here "Write a review!" */}
          <Box sx={{
            display: 'flex',
            flexGrow: 1,
            alignContent: 'center',
            justifyContent: 'left',
          }}>
            <Typography align="center" variant="h4"  >
              How was your experience on `{trail_data.name}`
            </Typography>
          </Box>
        {/* Rating defined below */}
          <Box sx={{
            display: 'flex',
            flexGrow: 1,
            alignContent: 'center',
            justifyContent: isMobileMatch ? 'center' : 'right',
            marginTop: '2%'
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
            minRows="5"
            variant="outlined"
            value={desc}
            onChange={event => setDesc(event.target.value)}
            helperText={descInvalid ? "Description cannot be empty" : ""}
          />
        </Box>
      {/* Use geolocation API to automatically fill location for user*/}
        <Box sx={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'space-around'
        }}>
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