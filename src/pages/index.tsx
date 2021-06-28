import React from 'react';
import Head from 'next/head';
import HomeContainer from 'containers/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Donald</title>
        <meta
          name="description"
          content="Marc Donald - Associate Software Engineer"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#212121" />
        <meta name="theme-color" content="#212121" />
        <meta name="theme-color" content="#FAFAFA" />

        {/*Favicons*/}
        <link rel="icon" href="home/favicons/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="home/favicons/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="home/favicons/favicon-192.png" sizes="192x192" />

        {/*Android*/}
        <link
          rel="shortcut icon"
          sizes="196x196"
          href="home/favicons/favicon-196.png"
        />

        {/*IOS*/}
        <link
          rel="apple-touch-icon"
          href="home/favicons/favicon-152.png"
          sizes="152x152"
        />
      </Head>
      <HomeContainer />
    </>
  );
}
