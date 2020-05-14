import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/serviceStyles';

const servicesList = [
  {
    name: 'Full Set',
    price: '$26 UP',
  },
  {
    name: 'Fill In',
    price: '$18 UP',
  },
  {
    name: 'Pink & White Full Set',
    price: '$50 UP',
  },
  {
    name: 'Pink & White Fill In',
    price: '$40 UP',
  },
  {
    name: 'Pink & White Gel Set',
    price: '$60 UP',
  },
  {
    name: 'Pink & White Gel Fill',
    price: '$40 UP',
  },
  {
    name: 'Manicure',
    price: '$12',
  },
  {
    name: 'Pedicure',
    price: '$26',
  },
  {
    name: 'Manicure & Pedicure',
    price: '$36',
  },
  {
    name: 'Gel Manicure',
    price: '$25',
  },
  {
    name: 'Gel Pedicure',
    price: '$40',
  },
  {
    name: 'Delux Pedicure',
    price: '$36',
  },
  {
    name: 'Gel Full Set',
    price: '$46 UP',
  },
  {
    name: 'Gel Fill In',
    price: '$26 UP',
  },
  {
    name: 'Polish Change',
    price: '$6',
  },
  {
    name: 'Toe Polish Change',
    price: '$10',
  },
  {
    name: 'Nail Designs',
    price: '$5 UP',
  },
  {
    name: 'Cut Down',
    price: '$3',
  },
  {
    name: 'French',
    price: '$5',
  },
  {
    name: 'Repairs',
    price: '$3 UP EACH',
  },
  {
    name: 'Eyebrows',
    price: '$7',
  },
  {
    name: 'Lip',
    price: '$5',
  },
  {
    name: 'Chin',
    price: '$10 UP',
  },
];

const Service = () => {
  const classes = useStyles();

  return (
    <section className={classes.service}>
      <Container maxWidth='lg'>
        <Grid container direction='column'>
          <Grid item className={classes.serviceHeading}>
            <Typography variant='h2' color='primary' align='center'>
              Services
            </Typography>
          </Grid>
          <Grid item container className={classes.serviceContainer}>
            <Grid item container sm={4}>
              <Grid
                item
                container
                justify='space-between'
                className={classes.serviceItemContainer}>
                <Grid item>
                  <Typography variant='body1' className={classes.serviceName}>
                    Full Set
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body1' className={classes.servicePrice}>
                    $26 UP
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Service;
