import React from 'react';
import {
  ProjectsGrid,
  ProjectShowcaseTitle,
  Wrapper,
} from './styles/ProjectShowcase';
import ProjectCard from 'components/ProjectCard';
import Project from 'models/Project';

interface ProjectShowcasePropTypes {
  projects: Project[];
}

export default function ProjectShowcase({
  projects,
}: ProjectShowcasePropTypes) {
  return (
    <Wrapper>
      <ProjectShowcaseTitle>Projects</ProjectShowcaseTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            img={project.imagePath}
            link={project.link}
            isAlt={index % 2 === 0}
          />
        ))}
      </ProjectsGrid>
    </Wrapper>
  );
}
