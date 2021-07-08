import OSSCard from './index';
import React from 'react';
import OpenSourceSoftware from '../../models/OpenSourceSoftware';

export default {
  title: 'OSSCard',
  component: OSSCard,
};

const exampleOSS: OpenSourceSoftware = {
  description: 'A cool Open Source Software',
  license: 'MIT License',
  link: 'https://www.github.com/MarcDonald',
  name: 'The OSS',
};

const Template = () => <OSSCard oss={exampleOSS} />;
export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
