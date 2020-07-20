import styled from 'styled-components';
import { shade, darken } from 'polished';
import Card from '../../components/Card';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 106px;
  height: 36px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;

  svg {
    margin-left: 11px;
    width: 18px;
    height: 12px;
    color: #0065ff;
  }

  h1 {
    margin-left: 5px;
    font-family: 'Inter';
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: center;
    color: #6200ee;
  }

  &:hover {
    background-color: ${darken(0.1, '#fff')};
  }
`;

export const FilterInput = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 372px;
  height: 36px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.38);

  input {
    margin-left: 16px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.6);
    border: 0;
  }

  img {
    margin-right: 16px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  height: 36px;
  border-radius: 4px;
  background-color: #6200ee;
  border: 0;

  svg {
    margin-left: 13px;
    width: 14px;
    height: 14px;
    color: #fff;
  }

  h1 {
    margin-left: 7px;
    text-transform: uppercase;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  &:hover {
    background-color: ${darken(0.1, '#6200ee')};
  }
`;

export const Content = styled(Card)`
  margin-top: 30px;
  width: 1200px;
  height: 720px;
`;

export const TableContainer = styled.section`
  margin-top: 10px;

  table {
    width: 100%;
    border-spacing: 0 8px;
    svg {
      height: 18px;
      width: 18px;
      color: rgba(0, 0, 0, 0.38);
    }

    th {
      align-items: left;
      text-align: left;
      text-transform: uppercase;
      opacity: 0.5;
      font-family: 'Inter';
      font-size: 10px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: 1.5px;
      color: rgba(0, 0, 0, 0.87);
    }

    td {
      padding: 13px 0;
      border-top: solid 1px rgba(0, 0, 0, 0.12);
      font-family: 'Inter';
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.71;
      letter-spacing: 0.1px;
      color: rgba(0, 0, 0, 0.87);

      span {
        padding: 7px 22px;
        text-align: center;
        width: 80px;
        height: 26px;
        border-radius: 13px;

        &.client {
          background-color: #f3f7ff;
          color: #0065ff;
        }

        &.lead {
          padding: 7px 30px;
          background-color: #f6f6f6;
          color: #666666;
        }
      }
    }

    td:first-child {
      border-top: solid 1px rgba(0, 0, 0, 0.12);
    }

    td:last-child {
      padding-left: 180px;

      border-top: solid 1px rgba(0, 0, 0, 0.12);
    }
  }
`;

export const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.span`
  border-radius: 4px;
  width: 100%;
  border: solid 0.5px rgba(0, 0, 0, 0.12);
`;

export const TableFooterContent = styled.div`
  margin-top: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TableFooterContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: Inter;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #a5abb7;
  }

  h3 {
    margin: 0 7px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    text-align: right;
    color: rgba(0, 0, 0, 0.87);
  }

  img {
    object-fit: contain;
    opacity: 0.5;
    margin-right: 7px;
  }
`;

export const TableFooterContentRight = styled.div`
  display: flex;
  width: 150px;
  flex-direction: row-reverse;
  align-items: center;

  svg {
    opacity: 0.5;
  }
`;
