import React from 'react';
import { Container, FooterItem } from './FooterStyles';
import Link from 'next/link';

export default function Footer() {
  return (
    <Container>
      <a href='https://github.com/MarcDonald/MarcDonald.github.io'><FooterItem>Website Code</FooterItem></a>
      <Link href='/oss'><a><FooterItem>OSS Used</FooterItem></a></Link>
      <a href='https://github.com/MarcDonald'><FooterItem>GitHub</FooterItem></a>
      <a href='https://twitter.com/DeveloperMarc'><FooterItem>Twitter</FooterItem></a>
    </Container>
  );
}