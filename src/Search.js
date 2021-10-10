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
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
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
      <TextField
        id="outlined-select-rating"
        select
        label="Ratings"
        sx={{
          maxWidth: '90%'
        }}
        defaultValue=''
      // value={currency}
      // onChange={handleChange}
      >
        {ratings.map((rating) => (
          <MenuItem key={rating} value={rating} style={{ width: '100%'}}>
            <Rating name="read-only" value={rating} readOnly />
          </MenuItem>
        ))}
      </TextField>
      <br/>
      <Button 
        variant="contained" 
        type="submit" 
        component={Link} 
        to={'/results'}
        style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
        Search Reviews
      </Button>
      <Button 
        variant="contained" 
        component={Link} 
        to={'/addreview'}
        style={{ width: 200, textDecoration: 'none', color: 'white', backgroundColor: '#39afd8'}}>
        Create Review
      </Button>
    </Box>
    //     <form className="search">
    // {/*      // <div className="search__input">
    //       //   <SearchIcon className="search__inputIcon" />
    //       //   <input />
    //       // </div>
    // */}      
    //       <TextField/>
    //       <FormControl halfWidth>
    //         <InputLabel id="demo-simple-select-label">Age</InputLabel>
    //         <Select
    //           autoWidth='true'
    //           labelId="demo-simple-select-label"
    //           id="demo-simple-select"
    //           // value={age}
    //           label="Age"
    //           // onChange={handleChange}
    //         >
    //           <MenuItem value={10}>Ten</MenuItem>
    //           <MenuItem value={20}>Twenty</MenuItem>
    //           <MenuItem value={30}>Thirty</MenuItem>
    //         </Select>
    //       </FormControl>
    //       <div className="search__buttons">
    //         <Button variant="outlined" type="submit">Search Reviews</Button>
    //         <Button variant="outlined">Create Review</Button>
    //       </div>
    //     </form>
  );
}

export default Search;