import React from 'react';
import {
  Container,
  CTAContainer,
  DescriptionContainer,
  Header,
  HeaderText,
  Image,
  ImageContainer,
  TechnologiesContainer,
  TechnologiesTitle,
} from './ProjectCardStyles';
import Link from 'next/link';
import { CTAButton } from '../../../styles/Global';

interface ProjectCardPropTypes {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  img: string;
  isAlt?: boolean;
}

export default function ProjectCard(props: ProjectCardPropTypes) {
  return (
    <Container>
      <Header>
        <HeaderText>{props.title}</HeaderText>
      </Header>
      <DescriptionContainer>{props.description}</DescriptionContainer>

      <ImageContainer>
        <Image src={props.img} alt={props.title} />
      </ImageContainer>

      <TechnologiesContainer>
        <TechnologiesTitle>Technologies</TechnologiesTitle>
        {props.technologies.map((technology) => (
          <p key={technology}>{technology}</p>
        ))}
      </TechnologiesContainer>

      <CTAContainer>
        <Link href={props.link}>
          <CTAButton>More Info</CTAButton>
        </Link>
      </CTAContainer>
    </Container>
  );
}
