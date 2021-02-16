import React from 'react';
import { ProjectsGrid, ProjectShowcaseTitle, Container } from './ProjectShowcaseStyles';
import ProjectCard from './ProjectCard';
import Project from '../../models/Project';

interface ProjectShowcasePropTypes {
  projects: Project[]
}

export default function Index({ projects }: ProjectShowcasePropTypes) {
  return (
    <Container>
      <ProjectShowcaseTitle>Projects</ProjectShowcaseTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} title={project.title} description={project.description}
                       technologies={project.technologies} img={project.imagePath} link={project.link}
                       isAlt={index % 2 === 0} />
        ))}
      </ProjectsGrid>
    </Container>
  );
}