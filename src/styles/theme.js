import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// const primary = '#F8959C';
const primary = '#ff7675';
const secondary = '#fff';
const grey = '#888';
const greyLight = '#e5e5e5';
const whiteLight = '#f3f3f3';
const bodyColor = '#2980b9';

// Create a theme instance.
const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    common: {
      grey,
      greyLight,
      bodyColor,
      whiteLight,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.5,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3rem',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
      [defaultTheme.breakpoints.down('xs')]: {
        fontSize: '1.8rem',
      },
    },
    h2: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.3rem',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.1rem',
      },
      [defaultTheme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.4rem',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
      },
      [defaultTheme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
      },
    },
    h4: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.15rem',
      },
      [defaultTheme.breakpoints.down('xs')]: {
        fontSize: '1.1rem',
      },
    },
    h5: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});

export default theme;
