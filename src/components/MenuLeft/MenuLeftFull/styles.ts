import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: 240px;
  height: 970px;
  box-shadow: 1px 0 0 0 #e0e0e0;
  background-color: #fff;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const AvatarText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  margin-left: 10px;

  h1 {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;

  img {
    width: 10px;
    height: 10px;
  }

  span {
    text-transform: uppercase;
    margin-left: 5px;
    opacity: 0.5;
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 40px;
  width: 210px;

  &:hover {
    background: #f3f7ff;

    img {
      opacity: 1;
    }
  }

  h1 {
    margin-left: 25px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const Icon = styled.img`
  opacity: 0.3;
  margin-left: 15px;
`;
