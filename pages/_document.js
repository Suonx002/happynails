import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />

          <meta property='og:title' content='Happy Nails Studio 2' />
          <meta
            property='og:description'
            content='We offer professional nail services to our clients.'
          />
          <meta property='og:url' content='' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/assets/main_logo.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:alt' content='company landing' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
