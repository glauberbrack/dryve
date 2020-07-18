import React from 'react';

import { Container, Cards } from './styles';

import DashboardCard from './DashboardCard';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Cards>
        <DashboardCard title="Avaliações Hoje" />
        <DashboardCard title="Carros publicados" />
        <DashboardCard title="Ticket Médio do Estoque" />
      </Cards>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
