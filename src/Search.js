import React from "react";
import "./Search.css";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Link from 'react-router-dom/Link';

const ratings = [
1,2,3,4,5];

function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Trails" variant="outlined" />
      <TextField
        id="outlined-select-currency"
        select
        label="Ratings"
      // value={currency}
      // onChange={handleChange}
      >
        {ratings.map((rating) => (
          <MenuItem key={rating} value={rating}>
            <Rating name="read-only" value={rating} readOnly />
          </MenuItem>
        ))}
      </TextField>
      <br/>
      <Button 
        variant="outlined" 
        type="submit" 
        component={Link} 
        to={'/results'}
        style={{ textDecoration: 'none', color: '#32a850'}}>
        Search Reviews
      </Button>
      <Button 
        variant="outlined" 
        component={Link} 
        to={'/addreview'}
        style={{ textDecoration: 'none', color: '#32a850'}}>
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