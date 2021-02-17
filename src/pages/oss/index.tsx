import React from 'react';
import Head from 'next/head';
import { Container, CreditsGrid, Header, HeaderTitle, MainContent, SectionExplanation } from './OSSStyles';
import Footer from '../../components/Footer/Footer';
import OpenSourceSoftware from '../../models/OpenSourceSoftware';
import OSSCard from '../../components/OSSCard/OSSCard';

const ossList: OpenSourceSoftware[] = [
  {
    description: 'Font used throughout the site',
    license: 'Open Font License',
    link: 'https://fonts.google.com/specimen/Montserrat',
    name: 'Montserrat',
  },
  {
    description: 'Frontend framework used to build the site',
    license: 'MIT License',
    link: 'https://reactjs.org/',
    name: 'React',
  },
  {
    description: 'React framework used for server side rendering',
    license: 'MIT License',
    link: 'https://nextjs.org/',
    name: 'Next.js',
  },
  {
    description: 'Used to write CSS in JS',
    license: 'MIT License',
    link: 'https://styled-components.com/',
    name: 'Styled Components',
  },
  {
    description: 'Used to add typing support to Javascript',
    license: 'Apache 2.0 License',
    link: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
  },
  {
    description: 'Used to lint code and make it look pretty',
    license: 'MIT License',
    link: 'https://prettier.io/',
    name: 'Prettier',
  },
];

export default function OSS() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <meta name='msapplication-TileColor' content='#212121' />
        <meta name='theme-color' content='#212121' />
        <meta name='robots' content='noindex' />

        {/*Favicons*/}
        <link rel='icon' href='home/favicons/favicon-32.png' sizes='32x32' />
        <link rel='icon' href='home/favicons/favicon-128.png' sizes='128x128' />
        <link rel='icon' href='home/favicons/favicon-192.png' sizes='192x192' />

        {/*Android*/}
        <link rel='shortcut icon' sizes='196x196' href='home/favicons/favicon-196.png' />

        {/*IOS*/}
        <link rel='apple-touch-icon' href='home/favicons/favicon-152.png' sizes='152x152' />
        <title>Open Source Software</title>
      </Head>
      <Container>
        <Header>
          <HeaderTitle>Open Source Software</HeaderTitle>
        </Header>
        <MainContent>
          <SectionExplanation>This website uses the following Open Source Software</SectionExplanation>
          <CreditsGrid>
            {ossList.map(oss => (
              <OSSCard oss={oss} />
            ))}
          </CreditsGrid>
        </MainContent>
        <Footer />
      </Container>
    </>
  );
}