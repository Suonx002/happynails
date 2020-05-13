import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const primary = '#f368e0';
const secondary = '#fff';
const greyLight = '#e5e5e5';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      greyLight,
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
    },
    h2: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
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
