import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appbar: {
    height: 90,
    // overflow: 'hidden',
    overflowY: 'hidden',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  logoContainer: {
    height: 250,
    width: 250,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
      height: 225,
      width: 225,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
      width: 200,
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
    fontSize: '1.1rem',
    textDecoration: 'none',
    fontWeight: 400,
    color: theme.palette.common.white,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.common.greyLight,
    },
    '&:active': {
      backgroundColor: 'transparent',
      color: theme.palette.common.greyLight,
    },
  },
  rightMenuBook: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1.1rem',
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.primary.main,
    padding: '0.65rem 1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.common.greyLight,
    },
    '&:active': {
      backgroundColor: theme.palette.common.greyLight,
    },
  },
  // mobile
  drawerMenu: {
    marginLeft: 'auto',
  },
  drawerMenuIconContainer: {
    padding: 0,
    height: 35,
    width: 35,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerMenuIcon: {
    width: '100%',
    height: '100%',
    color: theme.palette.common.white,
  },
  listContainer: {
    width: 200,
    backgroundColor: theme.palette.secondary.main,
  },
  listItem: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'auto',
  },
  closeIconContainer: {
    width: 35,
    height: 35,
    cursor: 'pointer',
  },
  iconContainer: {
    width: '100%',
    height: '100%',
    color: theme.palette.primary.main,
  },
  drawerGetInTouchBtn: {
    textAlign: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '&:active': {
      backgroundColor: theme.palette.primary.light,
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
