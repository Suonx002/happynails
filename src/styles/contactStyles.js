import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  contact: {
    padding: '2rem 0',
    backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main},${theme.palette.primary.main})`,
  },
  contactHeading: {
    marginBottom: '2rem',
    color: theme.palette.common.white,
  },
  contractItemContainer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem ',
    },
  },
  contactItem: {
    marginBottom: '1rem',
    color: theme.palette.common.white,
  },
  contactTitle: {
    fontSize: '1.25rem',
    fontWeight: 400,
    marginBottom: '0.5rem',
  },
  contactDescription: {
    color: theme.palette.common.whiteLight,
  },
  contactLink: {
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.common.greyLight,
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
