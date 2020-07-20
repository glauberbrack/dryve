import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 206px 0 30px;
`;

export const Separator = styled.span`
  border-radius: 4px;
  max-width: 1200px;
  border: solid 0.5px rgba(0, 0, 0, 0.12);
  margin-top: 14px;
`;

export const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const TextLeft = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #616161;
`;

export const TextRight = styled.span`
  opacity: 0.5;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #6b6c6f;
`;
