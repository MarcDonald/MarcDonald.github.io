import React from 'react';
import Head from 'next/head';

export default function Hibi() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <title>Hibi - Japanese Journal App for Android</title>
        <meta name='description'
              content='Hibi is an Android app designed to help you learn and study Japanese by keeping a journal.' />
        {/*Favicons*/}
        <link rel='apple-touch-icon' sizes='144x144' href='hibi/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='hibi/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='hibi/favicons/favicon-16x16.png' />
        <link rel='mask-icon' href='hibi/favicons/safari-pinned-tab.svg' color='#212121' />
        <link rel='shortcut icon' href='hibi/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#212121' />
        <meta name='msapplication-config' content='hibi/favicons/browserconfig.xml' />
        <meta name='theme-color' content='#212121' />
        {/*End Favicons*/}
      </Head>
      <div>Hibi</div>
    </>
  );
}