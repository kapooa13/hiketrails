import * as React from 'react';
import {
  Avatar,
  Box,
  Card,
  Rating,
  Typography,
  useMediaQuery
} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

import SimpleMap from './SimpleMap';

// Sample submission with reviews and hardcoded image
// use box for overall page
// card and cardmedia for reviews and images

export default function SampleObject() {

  const value = 3;
  // mobile break point
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
              Chedoke Radial Recreational
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
          <SimpleMap/>
          </Card>
        </Box>
        {/* Hardcoded user reviews */}
        <Box sx={{
          display: 'flex',
          padding: '10px',
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
                <Avatar sx={{ width: 70, height: 70, bgcolor: deepPurple[500] }}>AK</Avatar>
                <div style={{ marginTop: '8%' }}>
                  <b> Ankit Kapoor </b>
                </div>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <p>
                  I went to the place it was nice.
                </p>
              </Box>
            </Box>
          </Card>
        </Box>

        <Box sx={{
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
                <Avatar sx={{ width: 70, height: 70, bgcolor: deepOrange[500] }}>TA</Avatar>
                <div style={{ marginTop: '8%' }}>
                  <b> Tahseen Ahmed </b>
                </div>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <p>
                  I went to the place it was not nice.
                </p>
              </Box>
            </Box>
          </Card>
        </Box>

      </Box>
    </div>
  );
}