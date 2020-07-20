import React from 'react';

import { Container, Header, Title, Content } from './styles';

import helpImg from '../../../assets/icons/help.svg';

const DashboardPricesGraph: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Preços - Dryve x KBB</Title>
        <img src={helpImg} alt="Ajuda" />
      </Header>
      <Content>
        <Title>teeee</Title>
      </Content>
    </Container>
  );
};

export default DashboardPricesGraph;
