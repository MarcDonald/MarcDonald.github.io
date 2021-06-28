import React from 'react';
import Head from 'next/head';
import HibiContainer from 'containers/hibi';

export default function Hibi() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Hibi - Japanese Journal App for Android</title>
        <meta
          name="description"
          content="Hibi is an Android app designed to help you learn and study Japanese by keeping a journal."
        />
        {/*Favicons*/}
        <link rel="shortcut icon" href="hibi/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#212121" />
        <meta
          name="msapplication-config"
          content="hibi/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#212121" />
        {/*End Favicons*/}
      </Head>
      <HibiContainer />
    </>
  );
}
