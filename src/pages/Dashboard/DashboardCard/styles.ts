import styled from 'styled-components';

export const Container = styled.div`
  width: 387px;
  height: 110px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background: #ffffff;
  padding-left: 20px;

  h2 {
    margin-top: 15px;
    width: 100%;
    height: 16px;
    opacity: 0.5;
    font-family: Inter;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
  }
`;

export const ContainerMiddle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;

  h1 {
    width: 100%;
    font-family: Inter;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const IconContainer = styled.div`
  margin-top: -15px;
  margin-right: 20px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #f3f7ff;
  display: flex;
  justify-content: center;
`;

export const IconImage = styled.img`
  padding: 15px;
  object-fit: contain;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -2px;
  margin-top: -8px;

  p {
    opacity: 0.5;
    font-family: Inter;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    text-transform: lowercase;
    color: rgba(0, 0, 0, 0.87);

    span {
      margin-left: 1px;
      margin-right: 5px;
      font-size: 12px;
      line-height: 1.33;
      letter-spacing: 0.4px;
    }
  }
`;

export const PercentageImage = styled.img`
  object-fit: contain;
`;
