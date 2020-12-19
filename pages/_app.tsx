import React from 'react';
import { AppProps } from 'next/app';
import '../css/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
