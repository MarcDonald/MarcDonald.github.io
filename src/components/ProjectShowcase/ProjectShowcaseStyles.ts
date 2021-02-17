import styled from 'styled-components';
import { size } from '../../utils/Breakpoints';

export const Container = styled.section`

`;

export const ProjectShowcaseTitle = styled.h4`
  background-color: ${props => props.theme.background};
  position: sticky;
  top: 0;
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const ProjectsGrid = styled.div`
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
