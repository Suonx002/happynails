import React from 'react';

import { Container, Grid, Typography, Button } from '@material-ui/core';

import useStyles from '../styles/homepageStyles';

import Navbar from './navbar';

const Homepage = () => {
  const classes = useStyles();

  return (
    <section className={classes.homepage} id='home'>
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
              role='button'
              aria-label='book appointment'
              variant='contained'
              color='secondary'
              rel='noopener noreferrer'
              target='_blank'
              href='https://my.setmore.com/bookingpage/6c797dd9-b8ef-4fbb-b35e-8b4b0bea18aa?isFBBDP=true'
              className={classes.jumbotronBtn}>
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Homepage;
