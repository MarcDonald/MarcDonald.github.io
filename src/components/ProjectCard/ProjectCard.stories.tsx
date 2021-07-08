import OSSCard from './index';
import React from 'react';
import OpenSourceSoftware from '../../models/OpenSourceSoftware';
import ProjectCard from './index';
import PictureHeader from '../PictureHeader';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    technologies: { control: 'array' },
    link: { control: 'text' },
    img: { control: 'text' },
    isAlt: { control: 'boolean' },
  },
};

const Template = (args) => <ProjectCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'Description',
  technologies: ['Tech 1', 'Tech 2'],
  link: 'www.google.com',
  img: 'https://placekitten.com/200/400',
  isAlt: false,
};
