import React from 'react';

import {
  Container,
  Cards,
  Content,
  LeftContent,
  RightContent,
  RightTopContent,
  RightBottomContent,
} from './styles';

import DashboardCard from './DashboardCard';
import DashboardCarValuations from './DashboardCarValuations';
import DashboardTopIntentions from './DashboardTopIntentions';

import imgCar from '../../assets/icons/car-selected.svg';
import imgDevice from '../../assets/icons/device.svg';
import imgMoney from '../../assets/icons/money.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Cards>
        <DashboardCard
          title="Avaliações Hoje"
          value="29"
          iconSrc={imgCar}
          iconAlt="Avaliações Hoje"
          positiveNegative="positive"
          percentageValue="36"
          percentageText="Desde hoje"
        />
        <DashboardCard
          title="Carros Publicados"
          value="397"
          iconSrc={imgDevice}
          iconAlt="Carros Publicados"
          positiveNegative="positive"
          percentageValue="4"
          percentageText="este mês"
        />
        <DashboardCard
          title="Ticket Médio do Estoque"
          value="R$ 42.567"
          iconSrc={imgMoney}
          iconAlt="Ticket Médio do Estoque"
          positiveNegative="negative"
          percentageValue="6"
          percentageText="este mês"
        />
      </Cards>
      <Content>
        <LeftContent>
          <DashboardCarValuations />
        </LeftContent>
        <RightContent>
          <RightTopContent>
            <DashboardTopIntentions />
          </RightTopContent>
          <RightBottomContent />
        </RightContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
