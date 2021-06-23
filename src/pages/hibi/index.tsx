import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  FeaturesContainer,
  Bottom,
  Hero,
  ScrollIndicator,
  BottomCTAContainer,
  BottomNavigationContainer,
} from './HibiStyles';
import { CTAButton } from '../../styles/Global';
import FeatureCard from '../../components/FeatureCard';
import Footer from '../../components/Footer/Footer';

export default function Hibi() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Hibi - Japanese Journal App for Android</title>
        <meta
          name="description"
          content="Hibi is an Android app designed to help you learn and study Japanese by keeping a journal."
        />
        {/*Favicons*/}
        <link rel="shortcut icon" href="hibi/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#212121" />
        <meta
          name="msapplication-config"
          content="hibi/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#212121" />
        {/*End Favicons*/}
      </Head>
      <Container>
        <Hero>
          <h1>Hibi「日々」</h1>
          <h2>An app to help you learn Japanese by keeping a journal</h2>

          <img src="hibi/main-display-dark.png" alt="Hibi main screen" />

          <Link
            href="https://www.github.com/MarcDonald/Hibi/releases/latest"
            passHref={true}
          >
            <CTAButton>Download</CTAButton>
          </Link>

          <ScrollIndicator>
            <p>Scroll to see features</p>
            <img src="scroll-indicator.svg" alt="Scroll to see features" />
          </ScrollIndicator>
        </Hero>
        <FeaturesContainer>
          <FeatureCard
            title={'Search Jisho.org'}
            subtitle={'without switching app'}
          >
            <img src={'hibi/search-jisho.png'} alt="Search Jisho" />
          </FeatureCard>
          <FeatureCard title={'Light theme for the day'}>
            <img src={'hibi/main-display-light.png'} alt="Search Jisho" />
          </FeatureCard>
          <FeatureCard title={'Dark theme for the night'}>
            <img src={'hibi/main-display-dark.png'} alt="Search Jisho" />
          </FeatureCard>
          <FeatureCard
            title={'Enrich your entries'}
            subtitle={'with images, locations, and more'}
          >
            <img src={'hibi/add-entry.png'} alt="Search Jisho" />
          </FeatureCard>
          <FeatureCard
            title={'Organise your entries'}
            subtitle={'with Tags and Books'}
          >
            <img src={'hibi/add-books.png'} alt="Search Jisho" />
          </FeatureCard>
        </FeaturesContainer>
        <Bottom>
          <BottomCTAContainer>
            <h1>Check it out</h1>
            <div>
              <h2>View the source code</h2>
              <Link
                href="https://www.github.com/MarcDonald/Hibi"
                passHref={true}
              >
                <CTAButton>
                  <img src="code-icon.svg" alt="View Source Code" />
                </CTAButton>
              </Link>
            </div>
            <div>
              <h2>Download now</h2>
              <Link
                href="https://www.github.com/MarcDonald/Hibi/releases/latest"
                passHref={true}
              >
                <CTAButton>
                  <img src="download-icon.svg" alt="Download Now" />
                </CTAButton>
              </Link>
            </div>
          </BottomCTAContainer>
          <BottomNavigationContainer>
            <h1>Navigation</h1>
            <div>
              <Link href="/">
                <button>Back to Top</button>
              </Link>
              <Link href="/">
                <button>Home</button>
              </Link>
            </div>
          </BottomNavigationContainer>
          <Footer />
        </Bottom>
      </Container>
    </>
  );
}
