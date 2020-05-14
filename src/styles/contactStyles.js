import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  contact: {
    padding: '2rem 0',
  },
  contactHeading: {
    marginBottom: '2rem',
  },
  contractItemContainer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
  },
  contactItem: {
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  contactLink: {
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.common.grey,
  },
  contactBtnContainer: {
    marginTop: '0.5rem',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  contactBtn: {
    fill: '#115293',
    fontSize: 35,
    transition: 'all 0.3s',
    '&:hover': {
      fill: '#003293',
    },
  },
}));
