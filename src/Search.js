import React, { useState } from "react";
import "./Search.css";
import { Box, Button, TextField, MenuItem, InputAdornment, Rating } from "@mui/material"

import { useHistory
 } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';

// Search bar with ratings dropdown

const ratings = [1,2,3,4,5];

function Search() {

  const [searchTerm, setSearchTerm] = useState('');
  const [rating, setRating] = useState(0);
  const [searchEmpty, setSearchEmpty] = useState(false);

  function validateSearch() {
    const validSearch = searchTerm === '';
    setSearchEmpty(validSearch);
    return validSearch
  }

  const history = useHistory();
  const redirectSearchResults = (data) => {
    const invalidSearch = validateSearch()
    if (!invalidSearch) {
      history.push('/results', { 'data' : data, 'ratings' : false });
    }
  }
  const redirectRatingResults = (data) => {
    history.push('/results', { 'data' : data, 'ratings' : true });
  }

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
        error={searchEmpty}
        id="search-field" 
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
        value={searchTerm}
        onChange={(event) => {setSearchTerm(event.target.value)}}
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
          <MenuItem key={rating} value={rating} style={{ width: '100%'}} 
            onClick={(event) => { setRating(rating)}}>
            <Rating name="read-only" value={rating} readOnly />
          </MenuItem>
        ))}
      </TextField>
      <br/>
    {/* Button to search review for user*/}
      <Button 
        variant="contained" 
        type="button" 
        onClick = {
          () => {
            redirectSearchResults(searchTerm);
          }
      }
        style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
        Search By Name
      </Button>
    {/* Button to create reviews for user */}
      <Button 
        variant="contained" 
        onClick = {
          () => {
            redirectRatingResults(rating);
          }
        }
        style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
        Search By Rating
      </Button>
    </Box>
  );
}

export default Search;