import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  homepage: {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('/assets/hero.jpg') no-repeat center center/cover`,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  jumbotronContainer: {
    marginTop: '20rem',
  },
  jumbotronItem: {
    marginBottom: '1rem',
  },
  jumbotronBtn: {
    fontSize: '1.35rem',
    fontFamily: 'Raleway, sans-serif',
    color: theme.palette.primary.main,
    padding: '0.8rem 2.5rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.common.greyLight,
    },
    '&:active': {
      backgroundColor: theme.palette.common.greyLight,
    },
  },
  welcomeText: {
    letterSpacing: '1.5px',
  },
  companyText: {
    letterSpacing: '1.5px',
  },
}));
