import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Rating,
  Typography,
  useMediaQuery
} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

import { useHistory
 } from "react-router-dom";

import SimpleMap from './SimpleMap';
import UserProfile from './UserProfile';
import { postRequest } from './Backend';


// Sample submission with reviews and hardcoded image
// use box for overall page
// card and cardmedia for reviews and images

export default function SampleObject() {

  const history = useHistory();
  const trail_data = history.location.state.data;
  const [reviewData, setReviewData] = React.useState([]);
  const isLoggedIn = React.useState(UserProfile.getLoggedIn());
  postRequest({ 'trail_id' : trail_data.trail_id }, 'trail_review.php').then(
    (response) => {
      if (response.data !== reviewData) {
        setReviewData(response.data);
      }
    }
    ,
    (error) => {
      console.log(error);
    }
  );
  const mapData = [
    {
      name: trail_data.name,
      latitude: trail_data.latitude,
      longitude: trail_data.longitude,
    }
  ];

  // mobile break point
  const isMobileMatch = useMediaQuery("(max-width:600px)");

  function handleAddReview() {
    if (isLoggedIn) {
      history.push('/addreview', { data: trail_data });
    } else { // not logged in, send to login
      history.push('/login', {});
    }
  }

  function colourPicker(num) {
    return (num % 2 === 0 ? deepOrange[500] : deepPurple[500]);
  }

  function createReview(idx, review) {
    return <Box sx={{
          display: 'flex',
          padding: '10px',
          paddingBottom: '50px',
          justifyContent: 'center'
        }}>
          <Card sx={{ display: 'flex', width: '100%', maxWidth: '900px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>
              <Box sx={{
                width: '20%',
                display: 'flex',
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap'
              }}>
                <Avatar sx={{ width: 70, height: 70, bgcolor: colourPicker(idx) }}>{review.user_name.charAt(0).toUpperCase()}</Avatar>
                <div style={{ marginTop: '8%' }}>
                  <b> {review.user_name} </b>
                </div>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <p>
                  {review.review_content}
                </p>
              </Box>
            </Box>
          </Card>
        </Box>
  }

  function createReviewContent(reviewData) {

    if (Object.keys(reviewData).length !== 0) {
      return reviewData.map((item, idx) => createReview(idx, item));
    } else {

      return 
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
  {/* Box to organize stuff*/}
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
    {/* conditionally wrap based on mobile */}
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
              {trail_data.name}
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
              value={trail_data.rating}
              readOnly
            />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          marginTop: '2%',
          padding: '10px',
          justifyContent: 'center'
        }}>
          <Card sx={{ maxHeight: '500px' ,width: '100%', maxWidth: '900px' }}>
          <SimpleMap data={mapData}/>
          </Card>
        </Box>
        {/* Automatically generated user reviews from database */}

        {createReviewContent(reviewData)}

        <Box sx={{
          display: 'flex',
          padding: '10px',
          paddingBottom: '50px',
          justifyContent: 'center',
          alignContent: 'center',
          minHeight: '50px'
        }}>
          <Button variant="contained" type="button" onClick = {() => {handleAddReview()}}
            style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
            Add Review
          </Button>
        </Box>

      </Box>
    </div>
  );
}