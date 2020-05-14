import React from 'react';
import Head from 'next/head';

import { Container, Grid, Typography } from '@material-ui/core';
// import {useTheme} from '@material-ui/core/styles'
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
  // {
  //   name: 'Cut Down',
  //   price: '$3',
  // },
  // {
  //   name: 'French',
  //   price: '$5',
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
    price: '$10 UP',
  },
  {
    name: 'Repairs',
    price: '$3 UP EACH',
  },
];

const Service = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <section className={classes.service} id='services'>
      <Head>
        <title key='title'>
          Services - Happy Nails Studio 2 in Lebanon, PA
        </title>
        <meta
          name='description'
          key='description'
          content='Services offer to our clients'
        />
        <meta
          property='og:title'
          content='Happy Nails Studio 2 | Services'
          key='og:title'
        />
        {/* <meta property="og:url" key="og:url" content="arc.com/about" />
        <link rel="canonical" key="canonical" href="arc.com/about" /> */}
      </Head>

      <Container maxWidth='lg'>
        <Grid container direction='column'>
          <Grid item className={classes.serviceHeading}>
            <Typography variant='h2' color='primary' align='center'>
              Services
            </Typography>
          </Grid>
          <Grid item container className={classes.serviceContainer}>
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
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Service;
