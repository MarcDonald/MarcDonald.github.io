import React from 'react';

import { GlobalStyle } from '../src/styles/Global';
import { breakpoints, size } from '../src/utils/Breakpoints';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  (Story) => (
    <RouterContext.Provider
      value={{
        push: () => Promise.resolve(),
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve(),
      }}
    >
      <Story />
    </RouterContext.Provider>
  ),
];

const customViewports = {
  phone: {
    name: 'Phone',
    styles: {
      width: size.phone,
      height: '830px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: size.tablet,
      height: '830px',
    },
  },
  smallDesktop: {
    name: 'Small Desktop',
    styles: {
      width: size.smallDesktop,
      height: '830px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: size.desktop,
      height: '830px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'phone',
  },
};
