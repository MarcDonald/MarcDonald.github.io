import React, { ReactNode } from 'react';
import { Container, InnerCard, Title, Subtitle } from './FeatureCardStyles';

interface FeatureCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function FeatureCard({
  children,
  title,
  subtitle,
}: FeatureCardProps) {
  return (
    <Container>
      <InnerCard>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </InnerCard>
    </Container>
  );
}
