import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';

import useStyles from '../styles/navbarStyles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav>
      <AppBar
        position='fixed'
        color='primary'
        className={classes.appbar}
        elevation={0}>
        <Toolbar>
          <IconButton className={classes.logoContainer} disableRipple>
            <img
              src='/assets/logo.png'
              alt='main-logo'
              className={classes.logo}
            />
          </IconButton>
          <ul className={classes.rightMenuContainer}>
            <li className={classes.rightMenuItem}>
              <Button href='#' className={classes.rightMenuLink}>
                Home
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button href='#' className={classes.rightMenuLink}>
                About
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button href='#' className={classes.rightMenuLink}>
                Services
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button href='#' className={classes.rightMenuLink}>
                Contact
              </Button>
            </li>
            <li className={classes.rightMenuItem}>
              <Button
                href='#'
                className={classes.rightMenuBook}
                variant='contained'
                color='secondary'>
                Book Now
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </nav>
  );
};

export default Navbar;
