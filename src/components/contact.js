import React from 'react';

import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from '../styles/contactStyles';

const Contact = () => {
  const classes = useStyles();

  return (
    <section className={classes.contact}>
      <Container maxWidth='lg'>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2' color='primary' align='center'>
              Contact
            </Typography>
          </Grid>
          <Grid item container>
            {/* contact info */}
            <Grid item container direction='column' md={6}>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>
                  Phone Number:{' '}
                  <a
                    href='tel:1-717-273-6245'
                    rel='noopener noreferrer'
                    target='_blank'
                    className={classes.contactLink}>
                    717-273-6245
                  </a>
                </Typography>
              </Grid>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>
                  Address:{' '}
                  <a
                    href='https://www.google.com/maps/place/1735+Quentin+Rd,+Lebanon,+PA+17042/@40.3107722,-76.4257995,17z/data=!3m1!4b1!4m5!3m4!1s0x89c61d31bceed6a7:0x6b41f399a1574c06!8m2!3d40.3107681!4d-76.4236108'
                    rel='noopener noreferrer'
                    target='_blank'
                    className={classes.contactLink}>
                    1735 Quentin Rd. Lebanon, Pennsylvania
                  </a>
                </Typography>
              </Grid>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>
                  Email:{' '}
                  <a
                    href='mailto:happynailsstudio2@gmail.com'
                    rel='noopener noreferrer'
                    target='_blank'
                    className={classes.contactLink}>
                    happynailsstudio2@gmail.com
                  </a>
                </Typography>
              </Grid>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>Social: </Typography>
                <IconButton
                  className={classes.contactBtnContainer}
                  href='https://www.facebook.com/HappyNailsStudioTwo'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FacebookIcon className={classes.contactBtn} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          {/* map */}
          <Grid
            item
            container
            direciton='column'
            md={6}
            style={{ width: '100%', height: '400px' }}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
