import Head from 'next/head';
import styled from 'styled-components';
import React from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import Project from '../models/Project';

const Container = styled.div`
  text-align: center;
  color: white;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const Header = styled.header`
  background-color: #303030;
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  border-radius: 9999px;
  height: 150px;
`;

const Title = styled.div`
  margin-left: 3em;
`;

const TitleText = styled.h1`
  font-size: 4rem;
`;

const SubtitleText = styled.h2`
  color: #c0c0c0;
`;

const Technologies = styled.h3`
  margin: 2em 0;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MainSection = styled.section`
  margin: 0 12.5% 0 12.5%;
`;

const Footer = styled.footer`
  background-color: #303030;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1em 20% 1em 20%;
`;

const FooterItem = styled.h5`
  font-size: 1em;
`;

const projects: Project[] = [
  {
    title: 'Hibi',
    link: 'https://www.marcdonald.com/hibi',
    description: 'Keep a journal and learn Japanese',
    imagePath: 'hibi/main-display-dark.png',
  },
  {
    title: 'Earworm',
    link: 'https://www.marcdonald.com/earworm',
    description: 'Keep track of your music taste',
    imagePath: 'earworm/main-display-dark.png',
  },
  {
    title: 'Twitch Spotify Request Bot',
    link: 'https://github.com/MarcDonald/twitch-spotify-request-bot',
    description: 'Automatically queue song requests from Twitch chat',
    imagePath: 'https://placekitten.com/200/400',
  },
  {
    title: 'Other Projects',
    link: 'https://github.com/MarcDonald?tab:repositories',
    description: 'Kotlin, TypeScript, and More',
    imagePath: 'github/GitHub-Mark-Light-120px-plus.png',
  },
];


export default function Home() {
  return (
    <Container>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <meta name='msapplication-TileColor' content='#212121' />
        <meta name='theme-color' content='#212121' />
        <meta name='description' content='Marc Donald - Software Engineer' />
        <title>Marc Donald</title>
        <link rel='icon' href={'/favicon.ico'} />
      </Head>

      <Header>
        <ProfilePicture
          src='https://avatars2.githubusercontent.com/u/19517260'
          alt='Marc Donald' />
        <Title>
          <TitleText>Marc Donald</TitleText>
          <SubtitleText>Software Engineer</SubtitleText>
        </Title>
      </Header>
      <MainSection>
        <Technologies>Full Stack Software Engineer with experience in Android, Spring, NodeJS, AWS, React, Angular, and more</Technologies>
        <ProjectCarousel projects={projects} />
      </MainSection>
      <Footer>
        <a href='https://github.com/MarcDonald/MarcDonald.github.io'><FooterItem>Website Code</FooterItem></a>
        <a href='https://www.marcdonald.com/oss'><FooterItem>OSS Used</FooterItem></a>
        <a href='https://github.com/MarcDonald'><FooterItem>GitHub</FooterItem></a>
        <a href='https://twitter.com/DeveloperMarc'><FooterItem>Twitter</FooterItem></a>
      </Footer>
    </Container>
  );
}
