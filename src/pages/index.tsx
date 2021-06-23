import React from 'react';
import {
  Container,
  MainContent,
  Technologies,
  TechnologiesContainer,
} from './HomeStyles';
import Project from '../models/Project';
import ProjectShowcase from '../components/ProjectShowcase';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import PictureHeader from '../components/PictureHeader';

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
    description: 'A system for the management of event security and stewards. Final year university project',
    imagePath: 'https://placekitten.com/200/400',
    technologies: ['DynamoDB', 'AWS Lambda', 'AWS CDK', 'React', 'Kotlin Compose'],
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
    description: 'University Projects, Android Libraries, Polybar Modules, and more',
    imagePath: 'github/GitHub-Mark-Light-120px-plus.png',
    technologies: ['Kotlin', 'TypeScript', 'Bash', 'and More'],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Marc Donald</title>
        <meta name='description' content='Marc Donald - Associate Software Engineer' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='msapplication-TileColor' content='#212121' />
        <meta name='theme-color' content='#212121' />
        <meta name='theme-color' content='#FAFAFA' />

        {/*Favicons*/}
        <link rel='icon' href='home/favicons/favicon-32.png' sizes='32x32' />
        <link rel='icon' href='home/favicons/favicon-128.png' sizes='128x128' />
        <link rel='icon' href='home/favicons/favicon-192.png' sizes='192x192' />

        {/*Android*/}
        <link rel='shortcut icon' sizes='196x196' href='home/favicons/favicon-196.png' />

        {/*IOS*/}
        <link rel='apple-touch-icon' href='home/favicons/favicon-152.png' sizes='152x152' />
      </Head>
      <Container>
        <PictureHeader title='Marc Donald' subtitle='Associate Software Engineer' image='https://avatars2.githubusercontent.com/u/19517260' />
        <MainContent>
          <TechnologiesContainer>
            <Technologies>Full Stack Associate Software Engineer with experience in Android, Spring, NodeJS, AWS, React, Angular, and more</Technologies>
          </TechnologiesContainer>
          <ProjectShowcase projects={projects} />
        </MainContent>
        <Footer />
      </Container>
    </>
  );
}