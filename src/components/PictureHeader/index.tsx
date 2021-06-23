import React from 'react';
import { Header, HeaderPicture, HeaderSubtitle, HeaderTextContainer, HeaderTitle } from './PictureHeaderStyles';

interface PictureHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PictureHeader({ title, subtitle, image }: PictureHeaderProps) {
  return (
    <Header>
      <HeaderPicture
        src={image}
        alt={title} />
      <HeaderTextContainer>
        <HeaderTitle>{title}</HeaderTitle>
        {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
      </HeaderTextContainer>
    </Header>
  );
}