import React from "react";

import {
  Box,
  Grid,
  Card,
  CardMedia,
  Rating,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChedokeLocationImage from './chedoke-trail-min.png';
import InspirationalHikeImage from './inspirational-hike.jpeg';

function Results() {
  return (
    <Grid container>
      <Grid item xs={12} md={4} style={{ height: '90vh', overflow: 'auto' }}>
        <div style={{
          // marginTop: '2%',
          padding: '15px'
        }}>
          <TextField
            id="outlined-basic"
            label="Trails"
            variant="outlined"
            sx={{
              width: '100%',
            }}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>,
            }}
          />
        </div>

        <div style={{
          padding: '15px',
        }}>
          <Grid container sx={{
            padding: '15px',
            borderRadius: '5px',
            border: '2px solid #5BB973'
          }}>
            <Grid item xs={4} md={4}>

              <Card sx={{
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image={InspirationalHikeImage}
                  alt="Inspirational HIke Image"
                  style={{
                    maxHeight: '120px'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={8} md={8}>
              <Grid container sx={{
              	textAlign: 'left',
              	paddingLeft: '20px'
              }}>
                <Grid item xs={12} md={12}>
                  <Typography variant='h6'>
                    		Chedoke Radial Trail
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Rating
                    name="simple-controlled"
                    value='3'
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  "I went to this trail. It was pretty nice but the waterfalls are dry right now."
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>


        <div style={{
          padding: '15px',
        }}>
          <Grid container sx={{
            padding: '15px',
            borderRadius: '5px',
            border: '2px solid #5BB973'
          }}>
            <Grid item xs={4} md={4}>

              <Card sx={{
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image={InspirationalHikeImage}
                  alt="Inspirational HIke Image"
                  style={{
                    maxHeight: '120px'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={8} md={8}>
              <Grid container sx={{
              	textAlign: 'left',
              	paddingLeft: '20px'
              }}>
                <Grid item xs={12} md={12}>
                  <Typography variant='h6'>
                    		Chedoke Radial Trail
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Rating
                    name="simple-controlled"
                    value='3'
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  "I went to this trail. It was pretty nice but the waterfalls are dry right now."
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>


        <div style={{
          padding: '15px',
        }}>
          <Grid container sx={{
            padding: '15px',
            borderRadius: '5px',
            border: '2px solid #5BB973'
          }}>
            <Grid item xs={4} md={4}>

              <Card sx={{
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image={InspirationalHikeImage}
                  alt="Inspirational HIke Image"
                  style={{
                    maxHeight: '120px'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={8} md={8}>
              <Grid container sx={{
              	textAlign: 'left',
              	paddingLeft: '20px'
              }}>
                <Grid item xs={12} md={12}>
                  <Typography variant='h6'>
                    		Chedoke Radial Trail
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Rating
                    name="simple-controlled"
                    value='3'
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  "I went to this trail. It was pretty nice but the waterfalls are dry right now."
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div style={{
          padding: '15px',
        }}>
          <Grid container sx={{
            padding: '15px',
            borderRadius: '5px',
            border: '2px solid #5BB973'
          }}>
            <Grid item xs={4} md={4}>

              <Card sx={{
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image={InspirationalHikeImage}
                  alt="Inspirational HIke Image"
                  style={{
                    maxHeight: '120px'
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={8} md={8}>
              <Grid container sx={{
              	textAlign: 'left',
              	paddingLeft: '20px'
              }}>
                <Grid item xs={12} md={12}>
                  <Typography variant='h6'>
                    		Chedoke Radial Trail
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Rating
                    name="simple-controlled"
                    value='3'
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  "I went to this trail. It was pretty nice but the waterfalls are dry right now."
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        
      </Grid>

      <Grid item xs={12} md={8}>
        <div style={{
          height: '90vh',
          backgroundImage: `url(${ChedokeLocationImage})`
        }}>
        </div>
      </Grid>
    </Grid>

    // {/*
    // <div style={{
    //   height: '90vh',
    //   backgroundImage: `url(${ChedokeLocationImage})`
    // }}>
    //      <Box sx={{
    //      	width: '22%',
    //      	display: 'flex',
    //      	padding: '15px',
    //      	border: 1
    //      }}>
    // <TextField
    //   id="outlined-basic"
    //   label="Trails"
    //   variant="outlined"
    //   sx={{
    //     width: '100%',
    //     background: '#fff'
    //   }}
    //   InputProps={{
    //     startAdornment:
    //       <InputAdornment position="start">
    //         <SearchIcon />
    //       </InputAdornment>,
    //   }}
    // />
    //   </Box>   
    // // </div> */}


  );
}

export default Results;

