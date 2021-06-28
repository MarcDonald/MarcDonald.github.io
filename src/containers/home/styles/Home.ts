import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

export const MainContent = styled.div``;

export const TechnologiesContainer = styled.section`
  margin: 1rem 0;
  text-align: center;
`;

export const Technologies = styled.h3`
  font-size: 1.1rem;
  padding: 0 2rem;
`;
