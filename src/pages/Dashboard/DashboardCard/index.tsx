import React from 'react';

import {
  Container,
  ContainerMiddle,
  IconContainer,
  IconImage,
  ContainerFooter,
  PercentageImage,
} from './styles';

import imgArrowUp from '../../../assets/icons/arrow-up.svg';
import imgArrowDown from '../../../assets/icons/arrow-down.svg';

interface CardProps {
  title: string;
  value: string;
  iconSrc: string;
  iconAlt: string;
  positiveNegative: string;
  percentageValue: string;
  percentageText: string;
  className?: string;
}

const DashboardCard: React.FC<CardProps> = ({
  title,
  value,
  iconSrc,
  iconAlt,
  positiveNegative,
  percentageValue,
  percentageText,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ContainerMiddle>
        <h1>{value}</h1>
        <IconContainer>
          <IconImage src={iconSrc} alt={iconAlt} />
        </IconContainer>
      </ContainerMiddle>
      <ContainerFooter>
        {positiveNegative === 'positive' ? (
          <PercentageImage src={imgArrowUp} alt={percentageText} />
        ) : (
          <PercentageImage src={imgArrowDown} alt={percentageText} />
        )}

        <p>
          {positiveNegative === 'positive' ? (
            <span style={{ color: '#6200ee' }}>
{percentageValue}%</span>
          ) : (
            <span style={{ color: '#fc4a40' }}>
{percentageValue}%</span>
          )}

          {percentageText}
        </p>
      </ContainerFooter>
    </Container>
  );
};

export default DashboardCard;
