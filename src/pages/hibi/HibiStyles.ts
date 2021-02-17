import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.textPrimary};
  min-height: 100vh;
  max-height: 100vh;
`;
