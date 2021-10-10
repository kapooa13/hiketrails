import React from 'react';

import Typography from '@mui/material/Typography';

import Search from './Search';
import HTLogo from './assets/hiketrails-logo-mini.svg';

// body of app ie., homepage

export default function Home() {
  return (
    <div className="home__body">
      <div>
        <img src={HTLogo} alt="logo" width="210px" height="89px" />
      </div>
      <Typography variant="h2">
        HikeTrails
      </Typography>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}
