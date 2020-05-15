import React from 'react';

import {
  Container,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from '../styles/contactStyles';

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section className={classes.contact} id='contact'>
      <Container maxWidth='lg'>
        <Grid container direction='column'>
          <Grid item>
            <Typography
              variant='h2'
              color='primary'
              align='center'
              className={classes.contactHeading}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item container>
            {/* contact info */}
            <Grid
              item
              container
              direction='column'
              md={4}
              className={classes.contractItemContainer}>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>Phone Number: </Typography>
                <a
                  role='button'
                  aria-label='phone number'
                  href='tel:1-717-273-6245'
                  rel='noopener noreferrer'
                  target='_blank'
                  className={classes.contactLink}>
                  717-273-6245
                </a>
              </Grid>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>Address: </Typography>
                <a
                  role='button'
                  aria-label='address'
                  href='https://www.google.com/maps/place/1735+Quentin+Rd,+Lebanon,+PA+17042/@40.3107722,-76.4257995,17z/data=!3m1!4b1!4m5!3m4!1s0x89c61d31bceed6a7:0x6b41f399a1574c06!8m2!3d40.3107681!4d-76.4236108'
                  rel='noopener noreferrer'
                  target='_blank'
                  className={classes.contactLink}>
                  1735 Quentin Rd. Lebanon, Pennsylvania
                </a>
              </Grid>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>Email: </Typography>
                <a
                  role='button'
                  href='mailto:happynailsstudio2@gmail.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  className={classes.contactLink}>
                  happynailsstudio2@gmail.com
                </a>
              </Grid>
              <Grid item className={classes.contactItem}>
                <Typography variant='body1'>Social: </Typography>
                <IconButton
                  role='button'
                  aria-label='facebook'
                  className={classes.contactBtnContainer}
                  href='https://www.facebook.com/HappyNailsStudioTwo'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FacebookIcon className={classes.contactBtn} />
                </IconButton>
              </Grid>
            </Grid>
            {/* map */}
            <Grid item container direciton='column' md={8}>
              <iframe
                title='address for google map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.422847152954!2d-76.42579948406241!3d40.31077216999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c61d31bceed6a7%3A0x6b41f399a1574c06!2s1735%20Quentin%20Rd%2C%20Lebanon%2C%20PA%2017042!5e0!3m2!1sen!2sus!4v1589430743841!5m2!1sen!2sus'
                width='100%'
                height='450'
                frameBorder='0'
                style={{ border: 0 }}
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'></iframe>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
