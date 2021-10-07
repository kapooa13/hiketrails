import * as React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardContent,
  Input,
  Rating,
  Button,
  Typography,
  TextField,
  useMediaQuery
} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

import ChedokeLocationImage from './chedoke-trail-min.png';
import InspirationalHikeImage from './inspirational-hike.jpeg';

export default function SampleObject() {

  const value = 3;
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
          <Card sx={{ width: '100%', maxWidth: '900px' }}>
            <CardMedia
              component="img"
              height="auto"
              image={ChedokeLocationImage}
              alt="Chedoke Trail Location"
            />
          </Card>
        </Box>

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