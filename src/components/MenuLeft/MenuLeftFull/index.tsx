import React, { useState, useCallback } from 'react';

import {
  TopContainer,
  Container,
  AvatarContainer,
  AvatarImage,
  AvatarText,
  Logout,
  Icon,
  MenuContainer,
  MenuItem,
} from './styles';

import homeIcon from '../../../assets/icons/ic-home.svg';
import personIcon from '../../../assets/icons/ic-person.svg';
import carUnselectedIcon from '../../../assets/icons/car-unselected.svg';
import triangleIcon from '../../../assets/icons/ic-vector-triangle.svg';
import walletIcon from '../../../assets/icons/wallet.svg';
import powerIcon from '../../../assets/icons/power.svg';

const MenuLeft: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = useCallback(() => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [clicked]);

  return (
    <Container onClick={handleMenuClick}>
      <TopContainer>
        <AvatarContainer>
          <AvatarImage src="https://api.adorable.io/avatars/hi_mom" />
        </AvatarContainer>
        <AvatarText>
          <h1>Glauber Brack</h1>
          <Logout>
            <img src={powerIcon} alt="Sair" />
            <span>Sair</span>
          </Logout>
        </AvatarText>
      </TopContainer>

      <MenuContainer>
        <a href="/">
          <MenuItem style={{ background: '#f3f7ff' }}>
            <Icon src={homeIcon} style={{ opacity: 1 }} />
            <h1>Início</h1>
          </MenuItem>
        </a>

        <a href="/clients">
          <MenuItem>
            <Icon src={personIcon} />
            <h1>Clientes</h1>
          </MenuItem>
        </a>

        <MenuItem>
          <Icon src={carUnselectedIcon} />
          <h1>Veículos</h1>
        </MenuItem>

        <MenuItem>
          <Icon src={triangleIcon} />
          <h1>Triangulação</h1>
        </MenuItem>

        <MenuItem>
          <Icon src={walletIcon} />
          <h1 style={{ opacity: 0.2 }}>Financeiro</h1>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default MenuLeft;
