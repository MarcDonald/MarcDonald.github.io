import React from 'react';
import { AppProps } from 'next/app';
import 'styles/main.css';
import { ThemeProvider } from 'styled-components';
import Global from 'styles/Global';

const GlobalStyle = Global;

const darkTheme = {
  main: '#FF9700',
  mainLight: '#FFA51F',
  background: '#212121',
  backgroundSecondary: '#303030',
  backgroundSecondaryFocus: '#393939',
  backgroundTertiary: '#424242',
  textPrimary: '#FFFFFF',
  textSecondary: '#FFFFFFB3',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
