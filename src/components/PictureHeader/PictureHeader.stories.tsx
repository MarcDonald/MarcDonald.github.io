import PictureHeader from './index';
import React from 'react';

export default {
  title: 'PictureHeader',
  component: PictureHeader,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
  },
};

const Template = (args) => <PictureHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  image: 'https://placekitten.com/400/400',
};
