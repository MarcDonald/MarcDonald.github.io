import React, { ReactNode } from 'react';
import { InnerCard, OuterCard, Subtitle, Title } from './styles/FeatureCard';

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
    <OuterCard>
      <InnerCard>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </InnerCard>
    </OuterCard>
  );
}
