import React from 'react';
import {
  MainContent,
  Technologies,
  TechnologiesContainer,
  Wrapper,
} from './styles/Home';
import PictureHeader from 'components/PictureHeader';
import ProjectShowcase from 'components/ProjectShowcase';
import Footer from 'components/Footer';
import Project from 'models/Project';

const projects: Project[] = [
  {
    title: 'Hibi',
    link: '/hibi',
    description: 'Keep a journal and learn Japanese',
    imagePath: 'hibi/main-display-dark.png',
    technologies: ['Kotlin', 'MVVM', 'Jisho.org API', 'Kodein DI'],
  },
  {
    title: 'Event Management System',
    link: '/event-management-system',
    description:
      'A system for the management of event security and stewards. Final year university project',
    imagePath: 'https://placekitten.com/200/400',
    technologies: [
      'DynamoDB',
      'AWS Lambda',
      'AWS CDK',
      'React',
      'Kotlin Compose',
    ],
  },
  {
    title: 'Twitch Spotify Request Bot',
    link: 'https://github.com/MarcDonald/twitch-spotify-request-bot',
    description: 'Automatically queue song requests from Twitch chat',
    imagePath: 'https://placekitten.com/200/400',
    technologies: ['TypeScript', 'Spotify API', 'Twitch Chat API'],
  },
  {
    title: 'Other Projects',
    link: 'https://github.com/MarcDonald?tab:repositories',
    description:
      'University Projects, Android Libraries, Polybar Modules, and more',
    imagePath: 'github/GitHub-Mark-Light-120px-plus.png',
    technologies: ['Kotlin', 'TypeScript', 'Bash', 'and More'],
  },
];

export default function HomeContainer() {
  return (
    <Wrapper>
      <PictureHeader
        title="Marc Donald"
        subtitle="Associate Software Engineer"
        image="https://avatars2.githubusercontent.com/u/19517260"
      />
      <MainContent>
        <TechnologiesContainer>
          <Technologies>
            Full Stack Associate Software Engineer with experience in Android,
            Spring, NodeJS, AWS, React, Angular, and more
          </Technologies>
        </TechnologiesContainer>
        <ProjectShowcase projects={projects} />
      </MainContent>
      <Footer />
    </Wrapper>
  );
}
