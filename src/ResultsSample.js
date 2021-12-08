import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Rating,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

import { useHistory
 } from "react-router-dom";

import SimpleMap from './SimpleMap';
import { getRequest, postRequest } from "./Backend";

// sample results with grid for formatting

// if on a sufficiently large screen, we use 4 columns for results
// and 8 for map

// if on mobile, we use all 12 columns for results and push the map down

export default function ResultsSample() {

  const history = useHistory();
  const historyState = history.location.state;
  const defaultSearchTerm = (!historyState) ? '' : historyState.data;
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
  const [data, setData] = useState([]);
  if (historyState) {
    if (historyState.ratings) { // search by ratings
      postRequest({ 'search_rating': searchTerm }, 'search_ratings.php').then(
        (response) => {
          setData(response.data);
          historyState.ratings = false;
        },
        (error) => {
          console.log(error);
        }
      );
    } else { // search by search term
      postRequest({ 'search_term': searchTerm }, 'search.php').then(
        (response) => {
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  } else {
    postRequest({ 'search_term': searchTerm }, 'search.php').then(
        (response) => {
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const redirectToTrail = (data) => {
    getRequest({}, 'get_session.php').then(
      (response) => {
        console.log(response.data);
      }
      ,
      (error) => {
        console.log(error);
      }
      );
    history.push('/sampleobject', { data : data });
  }

  function generateResult(item) {
    return <div 
        style={{
            padding: '15px',
          }}
        onClick = { () => { redirectToTrail(item) } }
        >
          <Grid container sx={{
            padding: '15px',
            borderRadius: '5px',
            border: '2px solid #5BB973'
            }}
          >
            <Grid item xs={4} md={4}  component={Link} to={'/sampleobject'}>

              <Card sx={{
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image={item.image_url}
                  alt="Inspirational Hike Image"
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
                        {item.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Rating
                    name="simple-controlled"
                    value={item.rating}
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  {item.description}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
  };

  return (
    <Grid container>
      <Grid item xs={12} md={4} style={{ height: '90vh', overflow: 'auto' }}>
        <div style={{
          padding: '15px'
        }}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Trails"
                variant="outlined"
                value={searchTerm}
                onChange={(event) => {setSearchTerm(event.target.value)}}
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
            </Grid>
          </Grid>
        </div>

        {data.map((item, index) => generateResult(item))}

      </Grid>

    {/* Add Map instead of hardcoded image */}

      <Grid item xs={12} md={8}>
        <div style={{ height: '90vh'}}>
          <SimpleMap data={data}/>
        </div>
      </Grid>
    </Grid>
  );
}

