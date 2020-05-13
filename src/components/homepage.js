import React from 'react';

import { Container, Grid, Typography, Button } from '@material-ui/core';

import useStyles from '../styles/homepageStyles';

import Navbar from './navbar';

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.homepage}>
      <Navbar />
      <Container maxWidth='lg'>
        <Grid
          container
          direction='column'
          className={classes.jumbotronContainer}>
          <Grid item>
            <Typography
              variant='h2'
              color='secondary'
              className={classes.welcomeText}>
              Welcome to
            </Typography>
          </Grid>
          <Grid item className={classes.jumbotronItem}>
            <Typography
              variant='h1'
              color='secondary'
              className={classes.companyText}>
              Happy Nails Studio 2
            </Typography>
          </Grid>
          <Grid item className={classes.jumbotronItem}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.jumbotronBtn}>
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage;
