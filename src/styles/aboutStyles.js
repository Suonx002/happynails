import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  about: {
    padding: '3rem 0',
  },
  image: {
    height: 350,
    width: '100%',
    objectFit: 'cover',
  },
  aboutRightContainer: {
    padding: '0 2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0',
    },
  },
  aboutItem: {
    marginBottom: '1rem',
  },
}));
