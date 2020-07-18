import React from 'react';

import { Container, LeftContent, LogoText, RightContent } from './styles';

import logo from '../../assets/icons/logo.svg';
import notificationIcon from '../../assets/icons/notification.svg';
import searchIcon from '../../assets/icons/search.svg';

const MenuTop: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <img src={logo} alt="Dryve" />
        <LogoText />
      </LeftContent>
      <RightContent>
        <img src={searchIcon} alt="Buscar" />
        <img src={notificationIcon} alt="Notificações" />
      </RightContent>
    </Container>
  );
};

export default MenuTop;
