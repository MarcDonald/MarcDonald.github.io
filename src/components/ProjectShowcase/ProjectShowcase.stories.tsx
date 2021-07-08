import ProjectShowcase from './index';
import React from 'react';
import { ProjectsGrid } from './styles/ProjectShowcase';
import Project from '../../models/Project';

export default {
  title: 'ProjectsGrid',
  component: ProjectShowcase,
};

const exampleProject: Project = {
  title: 'Title',
  description: 'Description',
  technologies: ['Tech 1', 'Tech 2'],
  link: 'www.google.com',
  imagePath: 'https://placekitten.com/200/400',
};

const Template = (args) => (
  <ProjectShowcase
    projects={[
      exampleProject,
      exampleProject,
      exampleProject,
      exampleProject,
      exampleProject,
    ]}
  />
);
export const Default = Template.bind({});
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
