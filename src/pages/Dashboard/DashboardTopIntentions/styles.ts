import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Inter;
  width: 172px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`;

export const BuyOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const BuyOptionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
`;

export const BuyOptionBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 4px;
  border: #e0e0e0;
`;

export const BrandName = styled.span`
  width: 100%;
  margin-left: 14px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`;

export const BrandNumber = styled.span`
  height: 24px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const Separator = styled.span`
  border-radius: 4px;
  width: 100%;
  border: solid 0.5px #e0e0e0;
`;
