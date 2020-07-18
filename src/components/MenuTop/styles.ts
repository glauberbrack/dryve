import styled from 'styled-components';
import Card from '../Card';

export const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px 30px;
  background: white;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: unset;
`;

export const LogoText = styled.span`
  color: #a5abb7;
  width: 59px;
  margin: 5px 0 0 7px;

  ::after {
    font-family: 'Roboto';
    font-size: 10px;
    line-height: 1;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-transform: uppercase;
    content: 'backoffice';
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: unset;
  justify-content: unset;

  img {
    margin-right: 7px;
  }
`;
