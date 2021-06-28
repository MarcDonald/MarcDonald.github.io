import styled from 'styled-components';
import { size } from 'utils/Breakpoints';

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.backgroundSecondary};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  padding: 0.5rem 20%;

  @media (min-width: ${size.tablet}) {
    flex-direction: row;
  }
`;

export const FooterItem = styled.p`
  font-size: 0.8em;
  margin: 0.2rem 0;
  font-weight: bold;
  color: ${(props) => props.theme.textSecondary};

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;
