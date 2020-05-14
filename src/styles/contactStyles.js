import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  contact: {
    padding: '2rem 0',
  },
  contactItem: {
    marginBottom: '1rem',
    color: theme.palette.primary.main,
  },
  contactLink: {
    display: 'block',
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
