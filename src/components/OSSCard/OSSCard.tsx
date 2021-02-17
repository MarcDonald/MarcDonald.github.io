import React from 'react';
import OpenSourceSoftware from '../../models/OpenSourceSoftware';
import { Container, Description, License, Name } from './OSSCardStyles';
import Link from 'next/link';

interface OSSCardPropTypes {
  oss: OpenSourceSoftware;
}

export default function OSSCard({ oss }: OSSCardPropTypes) {
  return (
    <Link href={oss.link}>
      <Container>
        <Name>{oss.name}</Name>
        <Description>{oss.description}</Description>
        <License>{oss.license}</License>
      </Container>
    </Link>
  );
}