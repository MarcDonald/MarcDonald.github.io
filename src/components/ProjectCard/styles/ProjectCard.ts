import styled from 'styled-components';
import { size } from 'utils/Breakpoints';
import { Card } from 'styles/Global';

export const CardWrapper = styled(Card)`
  display: grid;
  grid-template-rows: repeat(4, auto) 6rem;

  @media (min-width: ${size.desktop}) {
    grid-template-rows: repeat(3, auto) 6rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Header = styled.div`
  padding: 1rem;
  font-size: 1.4rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  align-self: center;

  @media (min-width: ${size.desktop}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const HeaderText = styled.h4``;

export const DescriptionContainer = styled.div`
  align-self: center;

  @media (min-width: ${size.desktop}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const ImageContainer = styled.div`
  margin: 0.6em;
  min-height: 38rem;
  max-height: 38rem;

  @media (min-width: ${size.tablet}) {
    min-height: 30rem;
    max-height: 30rem;
  }

  @media (min-width: ${size.smallDesktop}) {
    min-height: 30rem;
    max-height: 30rem;
  }

  @media (min-width: ${size.desktop}) {
    min-height: 20rem;
    max-height: 20rem;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

export const TechnologiesContainer = styled.div`
  align-self: center;
`;

export const TechnologiesTitle = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
`;

export const CTAContainer = styled.div`
  margin: 0.6em;
  align-self: center;
  display: flex;
  justify-content: center;

  @media (min-width: ${size.desktop}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
