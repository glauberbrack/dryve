import styled from 'styled-components';
import Card from '../../components/Card';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const LeftContent = styled(Card)`
  padding: 0;
  width: 794px;
  height: 640px;
`;

export const RightContent = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const RightTopContent = styled(Card)`
  width: 387px;
  height: 384px;
`;

export const RightBottomContent = styled(Card)`
  margin-top: 30px;
  width: 387px;
  height: 226px;
`;
