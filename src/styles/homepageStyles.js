import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  homepage: {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('/assets/hero.jpg') no-repeat center center/cover`,
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
    fontSize: '1.25rem',
    fontFamily: 'Raleway, sans-serif',
    // color: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '0.8rem 2.5rem',
    textTransform: 'none',
  },
  welcomeText: {
    letterSpacing: '1.5px',
  },
  companyText: {
    letterSpacing: '1.5px',
  },
}));
