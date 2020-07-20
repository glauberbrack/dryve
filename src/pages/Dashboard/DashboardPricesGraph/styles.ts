import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 14px;
    height: 14px;
    margin-left: 6px;
  }
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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
