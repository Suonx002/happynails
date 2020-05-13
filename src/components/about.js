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
    <div className={classes.about}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item container md={6}>
            <Carousel interval={3000}>
              {images.map((image) => (
                <img
                  src={image.imageUrl}
                  alt={image.imageUrl}
                  className={classes.image}
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
              <Typography variant='body1' color='primary'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                recusandae repellendus molestiae distinctio eos incidunt nisi et
                odio labore cum!
              </Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
              <Typography variant='body1' color='primary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                esse assumenda eaque alias, adipisci repellat amet, sunt soluta
                maxime facere doloremque veniam, repudiandae officiis suscipit.
              </Typography>
            </Grid>
            <Grid item className={classes.aboutItem}>
              <Typography variant='body1' color='primary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                esse assumenda eaque alias, adipisci repellat amet, sunt soluta
                maxime facere doloremque veniam, repudiandae officiis suscipit.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
