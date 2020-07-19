import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 15px 20px;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: Inter;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`;

export const TopContentRight = styled.div`
  display: flex;
  margin-right: -5px;
`;

export const TableTopContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const TableTopText = styled.span`
  opacity: 0.5;
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
`;

export const TableSeparator = styled.span`
  border-radius: 4px;
  width: 100%;
  border: solid 0.5px rgba(0, 0, 0, 0.12);
  margin-top: 14px;
`;

export const CarContent = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  height: 465px;
  overflow-x: hidden;
`;

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    margin: 10px 0;
    border-radius: 4px;
    width: 100%;
    border: solid 0.5px rgba(0, 0, 0, 0.12);
    margin-top: 14px;
  }
`;

export const CarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarItemLeft = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;

  img {
    width: 80px;
    height: 60px;
    border-radius: 4px;
    border: solid 1px #e0e0e0;
  }
`;

export const CardItemLeftDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  h1 {
    margin-bottom: 4px;
    height: 16px;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #1e2c4c;
  }

  span {
    margin-bottom: 5px;
    height: 10px;
    font-family: 'Inter';
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.33px;
    color: #768095;
    text-transform: uppercase;
  }
`;

export const CarItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  span {
    margin-top: 6px;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.33px;
    color: #768095;
    text-transform: uppercase;
  }

  span.ad-value {
    margin-top: 4px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: normal;
    color: #1e2c4c;
  }

  span.min-value {
    margin-top: 4px;
    font-size: 12px;
    letter-spacing: normal;
    color: #a5abb7;
  }
`;

export const CarItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatusBarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 26px;
  border-radius: 13px;
  background-color: #f3f7ff;

  span {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #768095;
  }
`;

export const DatetimeRight = styled.div`
  display: flex;
  margin-top: 11px;

  span {
    font-family: 'Inter';
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #a5abb7;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-flow: row-reverse;
  padding: 15px 20px;

  span {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    text-align: right;
    color: #0065ff;
  }
`;
