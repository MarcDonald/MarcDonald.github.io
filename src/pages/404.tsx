import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';

const PageContainer = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
`;

const ContentContainer = styled.div`
  margin:0 25%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  color: ${props => props.theme.textPrimary};
  font-size: 20rem;
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.textSecondary};
  font-size: 3rem;
`;

const HomeButton = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.textPrimary};
  background: ${props => props.theme.main};
  border-radius: 15px;
  text-align: center;
  margin-top: 3em;
  padding: 1em 17em;
  cursor: pointer;
`;

export default function NotFound() {
  return (
    <PageContainer>
      <Head>
        <title>Not Found</title>
      </Head>
      <ContentContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Link href='/'><HomeButton>Return Home</HomeButton></Link>
      </ContentContainer>
    </PageContainer>
  );
}