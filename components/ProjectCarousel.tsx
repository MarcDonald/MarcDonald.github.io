import React from 'react';
import Project from '../models/Project';
import styled from 'styled-components';

interface ProjectCarouselPropTypes {
  projects: Project[]
}

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ProjectCard = styled.a`
  background-color: #424242;
  width: 20%;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: #303030;
  }
`;

const ProjectTitle = styled.h4``;

const ProjectImage = styled.img`
  max-height: 400px;
  margin-top: 10px;
`;

const ProjectText = styled.p`
  margin-top: 0.6em;
`;

export default function ProjectCarousel(props: ProjectCarouselPropTypes) {
  return (
    <Carousel>{
      props.projects.map(project =>
        <ProjectCard href={project.link}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectImage src={project.imagePath} alt={project.title} />
          <ProjectText>{project.description}</ProjectText>
        </ProjectCard>,
      )
    }</Carousel>
  );
}