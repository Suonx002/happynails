import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from '../styles/footerStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant='h4'
        color='secondary'
        align='center'
        className={classes.footerText}>
        &copy; 2020 Happy Nails Studio 2 LLC.{' '}
        <span className={classes.footerAllRights}>All Rights Reserved.</span>
      </Typography>
    </footer>
  );
};

export default Footer;
