import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  service: {
    padding: '2rem 0',
  },
  serviceHeading: {
    marginBottom: '2rem',
  },
  serviceContainer: {
    // border: `2px solid ${theme.palette.primary.main}`,
  },
  serviceItemContainer: {
    padding: '1rem',
    borderBottom: `2px solid ${theme.palette.primary.light}`,
  },
  serviceName: {},
  servicePrice: {
    display: 'inline-block',
    marginLeft: 'auto',
  },
}));
