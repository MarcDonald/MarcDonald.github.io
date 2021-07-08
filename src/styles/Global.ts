import styled, { createGlobalStyle } from 'styled-components';
import { px2vw } from 'utils/StyleUtils';
import { size } from 'utils/Breakpoints';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  :root {
    font-size: ${px2vw(52)};

    @media (min-width: ${size.tablet}) {
      font-size: ${px2vw(36)};
    }

    @media (min-width: ${size.smallDesktop}) {
      font-size: ${px2vw(20)};
    }

    @media (min-width: ${size.desktop}) {
      font-size: ${px2vw(12)};
    }
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 0 1rem;

  :hover {
    background-color: ${(props) => props.theme.backgroundSecondaryFocus};
  }

  @media (min-width: ${size.tablet}) {
    border-radius: 1rem;
    padding-bottom: 1rem;

    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.01);
      transition-duration: 200ms;
    }
  }
`;

export const CTAButton = styled.button`
  border: none;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.main};
  cursor: pointer;
  color: ${(props) => props.theme.textPrimary};
  font-weight: bold;
  padding: 0.6rem 5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition-duration: 200ms;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-10%);
    background-color: ${(props) => props.theme.mainLight};
  }

  @media (min-width: ${size.tablet}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${size.smallDesktop}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${size.desktop}) {
    font-size: 1rem;
  }
`;

export default GlobalStyle;
