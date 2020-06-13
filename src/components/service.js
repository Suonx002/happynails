import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
// import {useTheme} from '@material-ui/core/styles'
import useStyles from '../styles/serviceStyles';

const servicesList = [
  {
    name: 'Full Set',
    price: '$26+',
  },
  {
    name: 'Fill In',
    price: '$18+',
  },
  {
    name: 'Pink & White Full Set',
    price: '$50+',
  },
  {
    name: 'Pink & White Fill In',
    price: '$40+',
  },
  {
    name: 'Pink & White Gel Set',
    price: '$60+',
  },
  {
    name: 'Pink & White Gel Fill',
    price: '$40+',
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
    price: '$46+',
  },
  {
    name: 'Gel Fill In',
    price: '$26+',
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
    price: '$5+',
  },
  // {
  //   name: 'Cut Down',
  //   price: '3',
  // },
  // {
  //   name: 'French',
  //   price: '5',
  // },

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
    price: '$10+',
  },
];

const Service = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <section className={classes.service} id='services'>
      <Container maxWidth='lg'>
        <Grid container direction='column'>
          <Grid item className={classes.serviceHeading}>
            <Typography variant='h2' align='center'>
              Services
            </Typography>
          </Grid>
          <Grid
            item
            container
            className={classes.serviceContainer}
            justify='space-around'>
            {servicesList.map((service) => (
              <Grid
                key={service.name}
                item
                container
                direction='column'
                md={3}
                sm={4}
                xs={6}
                className={classes.serviceItem}>
                <Grid item>
                  <Typography variant='body1' className={classes.serviceName}>
                    {service.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body1' className={classes.servicePrice}>
                    {service.price}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          {/* <Grid item container className={classes.serviceContainer}>
            {servicesList.map((service) => (
              <Grid
                key={service.name}
                item
                container
                md={4}
                className={classes.serviceItemContainer}>
                <Grid item xs={8}>
                  <Typography variant='body1' className={classes.serviceName}>
                    {service.name}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant='body1'
                    align='right'
                    className={classes.servicePrice}>
                    {service.price}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid> */}
        </Grid>
      </Container>
    </section>
  );
};

export default Service;
