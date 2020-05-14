import React, { useState } from 'react';
import Head from 'next/head';

import { Container, Grid, Typography, Dialog } from '@material-ui/core';
import useStyles from '../styles/galleryStyles';

const galleryList = [
  {
    name: 'client 1',
    imageUrl: '/assets/client_1.jpg',
  },
  {
    name: 'client 2',
    imageUrl: '/assets/client_2.jpg',
  },
  {
    name: 'client 3',
    imageUrl: '/assets/client_3.jpg',
  },
  {
    name: 'client 4',
    imageUrl: '/assets/client_4.jpg',
  },
  {
    name: 'client 5',
    imageUrl: '/assets/client_5.jpg',
  },
  {
    name: 'client 6',
    imageUrl: '/assets/client_6.jpg',
  },
  {
    name: 'client 7',
    imageUrl: '/assets/client_7.jpg',
  },
  {
    name: 'client 8',
    imageUrl: '/assets/client_8.jpg',
  },
  {
    name: 'client 9',
    imageUrl: '/assets/client_9.jpg',
  },
  {
    name: 'client 10',
    imageUrl: '/assets/client_10.jpg',
  },
  {
    name: 'client 11',
    imageUrl: '/assets/client_11.jpg',
  },
  {
    name: 'client 12',
    imageUrl: '/assets/client_12.jpg',
  },
];

const Gallery = () => {
  const classes = useStyles();

  const [openImage, setOpenImage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className={classes.gallery} id='gallery'>
      <Head>
        <title key='title'>Gallery - Happy Nails Studio 2 in Lebanon, PA</title>
        <meta
          name='description'
          key='description'
          content='Gallery image of clients'
        />
        <meta
          property='og:title'
          content='Happy Nails Studio 2 | Gallery'
          key='og:title'
        />
        {/* <meta property="og:url" key="og:url" content="arc.com/about" />
        <link rel="canonical" key="canonical" href="arc.com/about" /> */}
      </Head>
      <Container maxWidth='lg'>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2' color='primary' align='center'>
              Gallery
            </Typography>
          </Grid>
          <Grid item container className={classes.galleryContainer}>
            {galleryList.map((gallery) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                className={classes.galleryItem}
                key={gallery.name}>
                <img
                  onClick={() => {
                    setOpenDialog(true);
                    setOpenImage({
                      name: gallery.name,
                      imageUrl: gallery.imageUrl,
                    });
                  }}
                  src={gallery.imageUrl}
                  alt={gallery.name}
                  className={classes.galleryImage}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Dialog
          onClose={() => setOpenDialog(false)}
          aria-labelledby='image-dialog'
          open={openDialog}
          maxWidth='md'>
          <img
            src={openImage.imageUrl}
            alt={openImage.name}
            className={classes.dialogImage}
          />
        </Dialog>
      </Container>
    </section>
  );
};

export default Gallery;
