import styled from 'styled-components';
import { size } from 'utils/Breakpoints';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

export const Header = styled.header`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.backgroundSecondary};
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
`;

export const MainContent = styled.div``;

export const SectionExplanation = styled.h3`
  margin: 1rem 0;
  text-align: center;
  font-size: 1.1rem;
  padding: 0 2rem;
`;

export const CreditsGrid = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;

  @media (min-width: ${size.tablet}) {
    margin: 1rem;
  }

  @media (min-width: ${size.desktop}) {
    margin: 1rem 4rem;
    grid-gap: 2rem;
  }
`;
