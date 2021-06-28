import React from 'react';
import OpenSourceSoftware from 'models/OpenSourceSoftware';
import { CardWrapper, Description, License, Name } from './styles/OSSCard';
import Link from 'next/link';

interface OSSCardPropTypes {
  oss: OpenSourceSoftware;
}

export default function OSSCard({ oss }: OSSCardPropTypes) {
  return (
    <Link href={oss.link}>
      <CardWrapper>
        <Name>{oss.name}</Name>
        <Description>{oss.description}</Description>
        <License>{oss.license}</License>
      </CardWrapper>
    </Link>
  );
}
