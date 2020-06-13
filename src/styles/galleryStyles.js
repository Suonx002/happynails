import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gallery: {
    padding: '2rem 0',
  },
  galleryContainer: {
    padding: '2rem 0',
  },
  galleryItem: {
    height: 300,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(80%)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      filter: 'brightness(100%)',
    },
  },

  dialogImage: {
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
  },
}));
