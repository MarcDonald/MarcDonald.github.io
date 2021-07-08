import Footer from './index';
import React from 'react';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = () => <Footer />;
export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
