import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
  },
  footerText: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  footerAllRights: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));
