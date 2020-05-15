import React from 'react';

import Carousel from 'react-material-ui-carousel';

import { Container, Grid, Typography } from '@material-ui/core';

import useStyles from '../styles/aboutStyles';

const images = [
  {
    imageUrl: '/assets/homepage_2.jpg',
  },
  {
    imageUrl: '/assets/homepage_3.jpg',
  },
  {
    imageUrl: '/assets/homepage_4.jpg',
  },
];

const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.about} id='about'>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item container md={6}>
            <Carousel interval={3000} role='button' aria-label='slideshow'>
              {images.map((image) => (
                <img
                  key={image.imageUrl}
                  src={image.imageUrl}
                  alt={image.imageUrl}
                  className={classes.aboutImage}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid
            item
            container
            direction='column'
            md={6}
            className={classes.aboutRightContainer}>
            <Grid item className={classes.aboutItem}>
              <Typography variant='h2' color='primary' align='center'>
                About Us
              </Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
              <Typography variant='body1' className={classes.aboutText}>
                Welcome to Happy Nails Studio 2 in Lebanon, PA. We opened in
                November 2019 and ready to assist you with all your nail salon
                services.
              </Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
              <Typography variant='body1' className={classes.aboutText}>
                Happy Nails Studio 2 is up to date with the latest treads and
                technologies. Our place has the highest sanitation and hygiene
                standards.
              </Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
              <Typography variant='body1' className={classes.aboutText}>
                Walk-ins are always welcome, but appointments are preferred.
              </Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
              <Typography variant='body1' className={classes.aboutText}>
                Give us a call or come in and see us soon!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
