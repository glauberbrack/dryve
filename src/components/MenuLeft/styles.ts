import styled, { css } from 'styled-components';

interface ContainerProps {
  clicked: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80px;
  height: 970px;
  box-shadow: 1px 0 0 0 #e0e0e0;
  background-color: #fff;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 38px 15px;

  width: 58px;
  height: 58px;
  border: solid 3px #0065ff;
  background-color: white;
  border-radius: 50%;
`;

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
`;

export const Icon = styled.img`
  object-fit: contain;
  margin-bottom: 28px;
  opacity: 0.3;
`;
