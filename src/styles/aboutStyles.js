import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  about: {
    padding: '2rem 0',
  },
  aboutImage: {
    height: 350,
    width: '100%',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
  },
  aboutRightContainer: {
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0',
    },
  },
  aboutItem: {
    marginBottom: '1rem',
  },
  aboutText: {
    color: theme.palette.common.grey,
    lineHeight: 1.5,
  },
}));
