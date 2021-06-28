import React from 'react';
import {
  CreditsGrid,
  Header,
  HeaderTitle,
  MainContent,
  SectionExplanation,
  Wrapper,
} from './styles/OSS';
import OSSCard from 'components/OSSCard';
import Footer from 'components/Footer';
import OpenSourceSoftware from 'models/OpenSourceSoftware';

const ossList: OpenSourceSoftware[] = [
  {
    description: 'Font used throughout the site',
    license: 'Open Font License',
    link: 'https://fonts.google.com/specimen/Open+Sans',
    name: 'Open Sans',
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

export default function OSSContainer() {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderTitle>Open Source Software</HeaderTitle>
        </Header>
        <MainContent>
          <SectionExplanation>
            This website uses the following Open Source Software
          </SectionExplanation>
          <CreditsGrid>
            {ossList.map((oss) => (
              <OSSCard oss={oss} />
            ))}
          </CreditsGrid>
        </MainContent>
        <Footer />
      </Wrapper>
    </>
  );
}
