import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const currencies = [
  {
    value: 'USD',
    label: '2',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // value={currency}
          // onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Rating name="read-only" value={option.label} readOnly />
            </MenuItem>
          ))}
        </TextField>
        <br/>
         <Button variant="outlined" type="submit">Search Reviews</Button>
         <Button variant="outlined">Create Review</Button>
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