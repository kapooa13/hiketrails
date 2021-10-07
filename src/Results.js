import React from "react";

import {
	Box,
	TextField,
	InputAdornment,
	} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChedokeLocationImage from './chedoke-trail-min.png';

function Results() {
  return (
    <div style={{
      height: '90vh',
      backgroundImage: `url(${ChedokeLocationImage})`
    }}>
      <Box sx={{
      	width: '22%',
      	display: 'flex',
      	padding: '20px',
      	border: 1
      }}>
	      <TextField
	        id="outlined-basic"
	        label="Trails"
	        variant="outlined"
	        sx={{
	          width: '100%',
	          background: '#fff'
	        }}
	        InputProps={{
	          startAdornment:
	            <InputAdornment position="start">
	              <SearchIcon />
	            </InputAdornment>,
	        }}
	      />
	  </Box>
    </div>
  );
}

export default Results;

