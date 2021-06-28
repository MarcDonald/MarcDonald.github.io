import styled from 'styled-components';
import { size } from 'utils/Breakpoints';

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  text-align: center;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.backgroundSecondary};

  @media (min-width: ${size.desktop}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const HeaderPicture = styled.img`
  border-radius: 10rem;
  height: 10rem;
  width: 10rem;
  align-self: center;

  @media (min-width: ${size.desktop}) {
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: end;
    margin-right: 1rem;
    height: 8rem;
    width: 8rem;
  }
`;

export const HeaderTextContainer = styled.div`
  @media (min-width: ${size.desktop}) {
    justify-self: start;
    grid-row-start: 1;
    grid-row-end: 3;
    align-self: center;
    margin-left: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
`;

export const HeaderSubtitle = styled.h2`
  font-size: 1.3rem;
  color: ${(props) => props.theme.textSecondary};
`;
