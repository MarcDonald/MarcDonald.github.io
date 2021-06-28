import styled from 'styled-components';
import { Card } from 'styles/Global';

export const CardWrapper = styled(Card)`
  cursor: pointer;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto 1fr;
`;

export const Name = styled.h3`
  margin: 1rem;
  font-size: 1.4rem;
`;

export const Description = styled.h4`
  margin: 1rem;
`;

export const License = styled.h5`
  margin: 1rem;
`;
