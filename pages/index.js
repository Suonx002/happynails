import React from 'react';

import Homepage from '../src/components/homepage';
import About from '../src/components/about';
import Service from '../src/components/service';
import Gallery from '../src/components/gallery';

export default function Index() {
  return (
    <>
      <Homepage />
      <About />
      <Service />
      <Gallery />
    </>
  );
}
