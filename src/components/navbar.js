import React, { useState } from 'react';
import { Link } from 'react-scroll';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from '../styles/navbarStyles';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const desktopMenu = (
    <ul className={classes.rightMenuContainer}>
      <li className={classes.rightMenuItem}>
        <Button
          role='button'
          aria-label='home'
          component={Link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          to='home'
          disableRipple
          className={classes.rightMenuLink}>
          Home
        </Button>
      </li>
      <li className={classes.rightMenuItem}>
        <Button
          role='button'
          aria-label='about'
          component={Link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          to='about'
          disableRipple
          className={classes.rightMenuLink}>
          About
        </Button>
      </li>
      <li className={classes.rightMenuItem}>
        <Button
          role='button'
          aria-label='services'
          component={Link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          to='services'
          disableRipple
          className={classes.rightMenuLink}>
          Services
        </Button>
      </li>
      <li className={classes.rightMenuItem}>
        <Button
          role='button'
          aria-label='gallery'
          component={Link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          to='gallery'
          disableRipple
          className={classes.rightMenuLink}>
          Gallery
        </Button>
      </li>
      <li className={classes.rightMenuItem}>
        <Button
          role='button'
          aria-label='contact'
          component={Link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          to='contact'
          disableRipple
          className={classes.rightMenuLink}>
          Contact
        </Button>
      </li>
      <li className={classes.rightMenuItem}>
        <Button
          role='button'
          aria-label='book appointment'
          disableRipple
          rel='noopener noreferrer'
          target='_blank'
          href='https://my.setmore.com/bookingpage/6c797dd9-b8ef-4fbb-b35e-8b4b0bea18aa?isFBBDP=true'
          className={classes.rightMenuBook}
          variant='contained'
          color='secondary'>
          Book Now
        </Button>
      </li>
    </ul>
  );

  const mobileMenu = (
    <nav className={classes.drawerMenu}>
      <IconButton
        className={classes.drawerMenuIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(true)}>
        <MenuIcon className={classes.drawerMenuIcon} />
      </IconButton>
      <Drawer
        anchor='right'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List className={classes.listContainer} disablePadding>
          <ListItem
            aria-label='close'
            role='button'
            button
            divider
            className={classes.closeContainer}
            disableRipple>
            <ListItemIcon className={classes.closeIconContainer}>
              <CloseIcon
                className={classes.iconContainer}
                onClick={() => setOpenDrawer(false)}
              />
            </ListItemIcon>
          </ListItem>
          <ListItem
            aria-label='home'
            role='button'
            button
            component={Link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
            to='home'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem
            aria-label='about'
            role='button'
            button
            component={Link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
            to='about'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='About' />
          </ListItem>
          <ListItem
            aria-label='services'
            role='button'
            button
            component={Link}
            spy={true}
            smooth={true}
            duration={600}
            to='services'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Services' />
          </ListItem>
          <ListItem
            aria-label='gallery'
            role='button'
            button
            component={Link}
            spy={true}
            smooth={true}
            duration={600}
            to='gallery'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Gallery' />
          </ListItem>
          <ListItem
            aria-label='contact'
            role='button'
            button
            component={Link}
            spy={true}
            smooth={true}
            duration={600}
            to='contact'
            onClick={() => setOpenDrawer(false)}
            divider
            className={classes.listItem}>
            <ListItemText primary='Contact' />
          </ListItem>
          <ListItem
            aria-label='book appointment'
            role='button'
            button
            className={classes.drawerGetInTouchBtn}
            rel='noopener noreferrer'
            target='_blank'
            component='a'
            href='https://my.setmore.com/bookingpage/6c797dd9-b8ef-4fbb-b35e-8b4b0bea18aa?isFBBDP=true'
            onClick={() => setOpenDrawer(false)}>
            <ListItemText primary='Book Now' />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );

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
          {matchesMD ? mobileMenu : desktopMenu}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </nav>
  );
};

export default Navbar;
