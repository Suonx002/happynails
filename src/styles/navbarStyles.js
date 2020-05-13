import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appbar: {
    height: 100,
    overflow: 'hidden',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginTop: '1rem',
  },
  logoContainer: {
    height: 250,
    width: 250,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  rightMenuContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
  },
  rightMenuItem: {
    minWidth: 10,
    marginRight: '1rem',
    padding: '0.5rem',
  },
  rightMenuLink: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1.25rem',
    textDecoration: 'none',
    fontWeight: 400,
    color: theme.palette.common.white,
    textTransform: 'none',
  },
  rightMenuBook: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1.25rem',
    textDecoration: 'none',
    textTransform: 'none',
    // color: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '0.5rem 1rem',
  },
}));
