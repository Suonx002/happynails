import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  service: {
    padding: '2rem 0',
  },
  serviceHeading: {
    marginBottom: '2rem',
  },
  serviceContainer: {
    backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light},${theme.palette.primary.main})`,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0.5rem',
    },
  },
  serviceItemContainer: {
    padding: '0.5rem 1rem',
    marginBottom: '0.5rem',
  },
  serviceName: {
    borderBottom: `1px solid ${theme.palette.common.white}`,
  },
  servicePrice: {
    borderBottom: `1px solid ${theme.palette.common.white}`,
  },
}));
