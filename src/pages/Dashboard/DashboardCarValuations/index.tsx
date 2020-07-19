import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ICar } from '../../../utils/interfaces/ICar';
import { API_PROD } from '../../../services/api';

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
  CardItemContainer,
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
  const formatValue = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    async function getCars(): Promise<void> {
      axios.get(API_PROD).then(response => {
        const { data } = response;
        setCars(data);
      });
    }
    getCars();
  }, []);
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
          <TableTopText style={{ width: '30%' }}>Dados do veículo</TableTopText>
          <TableTopText style={{ width: '15%' }}>Valor</TableTopText>
          <TableTopText style={{ width: '25%' }}>Status</TableTopText>
        </TableTopContent>
      </Header>
      <TableSeparator />
      <CarContent>
        {cars.map(car => (
          <CardItemContainer key={car.vehicle_uuid}>
            <CarItem>
              <CarItemLeft>
                <img src={car.image} alt="Veículo" />
                <CardItemLeftDetails>
                  <h1>{car.model_name}</h1>
                  <span>GDL8019</span>
                  <span>
                    {car.model_year}
                    {' - '}
                    {car.fuel_type}
                  </span>
                  <span>
                    {car.transmission_type}
                    {' - '}
                    {car.mileage} km
                  </span>
                </CardItemLeftDetails>
              </CarItemLeft>

              <CarItemMiddle>
                <span>Anúncio</span>
                <span className="ad-value">
                  {formatValue(car.ad_selling_price)}
                </span>
                <span>Mínimo aceito</span>
                <span className="min-value">
                  {formatValue(car.ad_selling_price)}
                </span>
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
            <hr />
          </CardItemContainer>
        ))}
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

{
  /* <CardItemContainer>
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
          <hr />
        </CardItemContainer> */
}
