import styled from 'styled-components';
import { Card } from 'styles/Global';

export const OuterCard = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  padding: 2rem;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
`;

export const InnerCard = styled(Card)`
  padding: 1rem;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
`;
