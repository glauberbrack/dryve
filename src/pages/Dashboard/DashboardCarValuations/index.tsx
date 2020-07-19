import React from 'react';

import {
  Container,
  Header,
  TopContent,
  Title,
  TopContentRight,
  TableTopContent,
  TableTopText,
  TableSeparator,
  CarContent,
  CarItem,
  CarItemLeft,
  CardItemLeftDetails,
  CarItemMiddle,
  CarItemRight,
  StatusBarRight,
  DatetimeRight,
  Footer,
} from './styles';

import arrowDown from '../../../assets/icons/arrow.svg';
import arrowMore from '../../../assets/icons/arrow-more.svg';
import chevrolet from '../../../assets/brands/chevrolet.png';

const DashboardCarValuations: React.FC = () => {
  return (
    <Container>
      <Header>
        <TopContent>
          <Title>Últimas Avaliações</Title>

          <TopContentRight>
            <Title>Hoje</Title>
            <img src={arrowDown} style={{ opacity: 0.5 }} alt="Filter" />
          </TopContentRight>
        </TopContent>

        <TableTopContent>
          <TableTopText style={{ width: '45%' }}>Dados do veículo</TableTopText>
          <TableTopText style={{ width: '25%' }}>Valor</TableTopText>
          <TableTopText>Status</TableTopText>
        </TableTopContent>
      </Header>
      <TableSeparator />
      <CarContent>
        <CarItem>
          <CarItemLeft>
            <img src={chevrolet} alt="Veículo" />
            <CardItemLeftDetails>
              <h1>JEEP COMPASS</h1>
              <span>GDL8019</span>
              <span>2018 - DIESEL</span>
              <span> automático - 70.972 km</span>
            </CardItemLeftDetails>
          </CarItemLeft>

          <CarItemMiddle>
            <span>Anúncio</span>
            <span className="ad-value">R$ 115.560</span>
            <span>Mínimo aceito</span>
            <span className="min-value">R$ 115.560</span>
          </CarItemMiddle>

          <CarItemRight>
            <StatusBarRight>
              <span>Aguardando precificação</span>
            </StatusBarRight>
            <DatetimeRight>
              <span>18/04/2020 às 14:35</span>
            </DatetimeRight>
          </CarItemRight>
        </CarItem>
      </CarContent>
      <TableSeparator />
      <Footer>
        <img src={arrowMore} alt="Ver tudo" />
        <span>Ver tudo</span>
      </Footer>
    </Container>
  );
};

export default DashboardCarValuations;
