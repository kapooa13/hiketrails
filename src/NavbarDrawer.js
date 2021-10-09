import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      light: '#5BB973',
      main: '#32a850',
      dark: '#237538',
      contrastText: '#fff',
    },
    secondary: {
      light: '#60BFDF',
      main: '#39afd8',
      dark: '#277A97',
      contrastText: '#000',
    },
  },
});


const NavbarDrawer = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
    setOpenDrawer(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor='right'
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}>
        <List>
          <ListItem divider button onClick={() => handleClick('/addreview')}>
            <ListItemIcon>
              <ListItemText> Add Review</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => handleClick('/results')}>
            <ListItemIcon>
              <ListItemText> Search Results</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => handleClick('/sampleobject')}>
            <ListItemIcon>
              <ListItemText> Sample Object</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => handleClick('/login')}>
            <ListItemIcon>
              <ListItemText> Login</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> Teachers Account</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon />
      </IconButton>
    </ThemeProvider>
  );
};

export default NavbarDrawer;