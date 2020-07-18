import React from 'react';

import { Container } from './styles';

interface CardProps {
  title: string;
  className?: string;
}

const DashboardCard: React.FC<CardProps> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default DashboardCard;
