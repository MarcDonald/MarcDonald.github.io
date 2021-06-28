import React from 'react';
import {
  Bottom,
  BottomCTAContainer,
  BottomNavigationContainer,
  FeaturesContainer,
  Hero,
  ScrollIndicator,
  Wrapper,
  HeroTitle,
  HeroSubtitle,
} from './styles/Hibi';
import Link from 'next/link';
import { CTAButton } from 'styles/Global';
import FeatureCard from 'components/FeatureCard';
import Footer from 'components/Footer';

export default function HibiContainer() {
  return (
    <>
      <Wrapper>
        <Hero>
          <HeroTitle>Hibi「日々」</HeroTitle>
          <HeroSubtitle>
            An app to help you learn Japanese by keeping a journal
          </HeroSubtitle>

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
      </Wrapper>
    </>
  );
}
