import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
