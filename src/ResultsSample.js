import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Rating,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChedokeLocationImage from './assets/chedoke-trail-min.png';
import InspirationalHikeImage from './assets/inspirational-hike.jpeg';

import SimpleMap from './SimpleMap';

// sample results with grid for formatting

// if on a sufficiently large screen, we use 4 columns for results
// and 8 for map

// if on mobile, we use all 12 columns for results and push the map down

export default function ResultsSample() {
  return (
    <Grid container>
      <Grid item xs={12} md={4} style={{ height: '90vh', overflow: 'auto' }}>
        <div style={{
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
        <div style={{ height: '90vh'}}>
          <SimpleMap/>
        </div>
{/*        <div style={{
          height: '90vh',
          backgroundImage: `url(${ChedokeLocationImage})`
        }}>
        </div>
*/}      </Grid>
    </Grid>
  );
}

