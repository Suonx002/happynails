import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  service: {
    padding: '2rem 0',
    backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main},${theme.palette.primary.main})`,
  },
  serviceHeading: {
    color: theme.palette.common.white,
    marginBottom: '2rem',
  },
  // serviceContainer: {
  //   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light},${theme.palette.primary.main})`,
  //   color: theme.palette.common.white,
  //   borderRadius: theme.shape.borderRadius,
  //   padding: '2rem',
  //   [theme.breakpoints.down('sm')]: {
  //     padding: '1rem',
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     padding: '1rem 0.5rem',
  //   },
  // },
  // serviceItemContainer: {
  //   padding: '0.5rem 1rem',
  //   marginBottom: '0.5rem',
  // },
  // serviceName: {
  //   borderBottom: `1px solid ${theme.palette.common.white}`,
  // },
  // servicePrice: {
  //   borderBottom: `1px solid ${theme.palette.common.white}`,
  // },
  serviceItem: {
    padding: '2rem',
    transition: 'box-shadow 0.4s ease',
    '&:hover': {
      boxShadow: '0 0 35px -2px rgba(0,0,0,.2)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    },
  },
  serviceName: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',
    color: theme.palette.common.white,
    textAlign: 'center',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
  servicePrice: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',
    color: theme.palette.common.white,
    textAlign: 'center',
    letterSpacing: '1px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
}));
