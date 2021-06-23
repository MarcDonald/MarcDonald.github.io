import styled from 'styled-components';
import { Card } from '../../styles/Global';
import FeatureCard from '../../components/FeatureCard';

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  min-height: 100vh;
`;

export const FullscreenContent = styled.div`
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
`;

export const InnerCard = styled(Card)`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
`;

export const Hero = styled(FullscreenContent)`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  h2 {
    text-align: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.textSecondary};
  }

  img {
    height: 75%;
    width: auto;
    max-width: 75%;
    object-fit: contain;
    margin: auto;
  }
`;

export const ScrollIndicator = styled.div`
  display: block;
  text-align: center;
  color: white;
  margin: 1rem 0;
  padding-bottom: 1rem;

  p {
    font-size: 1.5em;
  }

  @keyframes scroll_bounce {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(8px);
    }
  }

  img {
    width: auto;
    animation: scroll_bounce 1s infinite alternate;
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const Bottom = styled(FullscreenContent)`
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: 100%;
`;

export const BottomCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
  text-align: center;
`;

export const BottomNavigationContainer = styled.div`
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
