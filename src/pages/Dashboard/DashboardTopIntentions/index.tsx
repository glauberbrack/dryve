import React from 'react';

import {
  Title,
  BuyOptionContainer,
  BuyOptionRow,
  BuyOptionBrand,
  BrandLogo,
  BrandName,
  BrandNumber,
  Separator,
} from './styles';

import hyundaiLogo from '../../../assets/brands/hyundai.png';
import chevroletLogo from '../../../assets/brands/chevrolet.png';
import jeepLogo from '../../../assets/brands/jeep.png';
import nissanLogo from '../../../assets/brands/nissan.png';
import volkswagenLogo from '../../../assets/brands/volkswagen.png';

const DashboardTopIntentions: React.FC = () => {
  return (
    <>
      <Title>Top intenções de compra</Title>
      <BuyOptionContainer>
        <BuyOptionRow>
          <BuyOptionBrand>
            <BrandLogo src={hyundaiLogo} />
            <BrandName>HB20</BrandName>
          </BuyOptionBrand>
          <BrandNumber>197</BrandNumber>
        </BuyOptionRow>
        <Separator />

        <BuyOptionRow>
          <BuyOptionBrand>
            <BrandLogo src={chevroletLogo} />
            <BrandName>Onix</BrandName>
          </BuyOptionBrand>
          <BrandNumber>183</BrandNumber>
        </BuyOptionRow>
        <Separator />

        <BuyOptionRow>
          <BuyOptionBrand>
            <BrandLogo src={jeepLogo} />
            <BrandName>Renegade</BrandName>
          </BuyOptionBrand>
          <BrandNumber>125</BrandNumber>
        </BuyOptionRow>
        <Separator />

        <BuyOptionRow>
          <BuyOptionBrand>
            <BrandLogo src={volkswagenLogo} />
            <BrandName>T-Cross</BrandName>
          </BuyOptionBrand>
          <BrandNumber>109</BrandNumber>
        </BuyOptionRow>
        <Separator />

        <BuyOptionRow>
          <BuyOptionBrand>
            <BrandLogo src={nissanLogo} />
            <BrandName>Kicks</BrandName>
          </BuyOptionBrand>
          <BrandNumber>86</BrandNumber>
        </BuyOptionRow>
      </BuyOptionContainer>
    </>
  );
};

export default DashboardTopIntentions;
