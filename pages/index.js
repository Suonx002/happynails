import React from 'react';

import Homepage from '../src/components/homepage';
import About from '../src/components/about';
import Service from '../src/components/service';
import Gallery from '../src/components/gallery';
import Contact from '../src/components/contact';

export default function Index() {
  return (
    <main>
      <Homepage />
      <About />
      <Service />
      <Gallery />
      <Contact />
    </main>
  );
}
