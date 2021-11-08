import React from "react";
import "./Search.css";
import { Box, Button, TextField, MenuItem, InputAdornment, Rating } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import Link from 'react-router-dom/Link';

// Search bar with ratings dropdown

const ratings = [
1,2,3,4,5];

function Search() {
  return (
    // outer box for form
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
  {/* search text field for user to input along with search icon*/}
      <TextField 
        id="outlined-basic" 
        label="Trails" 
        variant="outlined"
        sx={{
          maxWidth: '90%'
        }} 
        InputProps={{
          startAdornment: 
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>,
        }}
      />
    {/* ratings drop down for user to pick ratings*/}
      <TextField
        id="outlined-select-rating"
        select
        label="Ratings"
        sx={{
          maxWidth: '90%'
        }}
        defaultValue=''
      >
        {ratings.map((rating) => (
          <MenuItem key={rating} value={rating} style={{ width: '100%'}}>
            <Rating name="read-only" value={rating} readOnly />
          </MenuItem>
        ))}
      </TextField>
      <br/>
    {/* Button to search review for user*/}
      <Button 
        variant="contained" 
        type="submit" 
        component={Link} 
        to={'/results'}
        style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
        Search Reviews
      </Button>
    {/* Button to create reviews for user */}
      <Button 
        variant="contained" 
        component={Link} 
        to={'/addreview'}
        style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
        Create Review
      </Button>
    </Box>
  );
}

export default Search;