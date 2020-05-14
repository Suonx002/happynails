import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from '../styles/footerStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h3' color='secondary' align='center'>
        &copy; 2020 Happy Nails Studio 2 LLC. All Rights Reserved
      </Typography>
    </footer>
  );
};

export default Footer;
