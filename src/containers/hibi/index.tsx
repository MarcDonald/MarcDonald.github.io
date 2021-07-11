import React from 'react';
import {
  Bottom,
  BottomCTAContainer,
  BottomNavigationContainer,
  FeaturesContainer,
  Hero,
  HeroSubtitle,
  HeroTitle,
  ScrollIndicator,
  Wrapper,
} from './styles/Hibi';
import Link from 'next/link';
import { Button, CTAButton } from 'styles/Global';
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
            <CTAButton>
              <img src="download-icon.svg" alt="Download Now" />
              <span>Download Now</span>
            </CTAButton>
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
            <div>
              <HeroTitle>Hibi「日々」</HeroTitle>
              <HeroSubtitle>Check it out</HeroSubtitle>
            </div>
            <Link href="https://www.github.com/MarcDonald/Hibi" passHref={true}>
              <CTAButton>
                <img src="code-icon.svg" alt="View Source Code" />
                <span>View Source Code</span>
              </CTAButton>
            </Link>
            <Link
              href="https://www.github.com/MarcDonald/Hibi/releases/latest"
              passHref={true}
            >
              <CTAButton>
                <img src="download-icon.svg" alt="Download Now" />
                <span>Download Now</span>
              </CTAButton>
            </Link>
          </BottomCTAContainer>
          <BottomNavigationContainer>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
            <Link href="/">
              <Button>Home</Button>
            </Link>
          </BottomNavigationContainer>
          <Footer />
        </Bottom>
      </Wrapper>
    </>
  );
}
