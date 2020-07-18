import React from 'react';
import { Link } from 'react-router-dom';

import { Container, AvatarContainer, AvatarImage, Icon } from './styles';

import homeIcon from '../../assets/icons/ic-home.svg';
import personIcon from '../../assets/icons/ic-person.svg';
import carUnselectedIcon from '../../assets/icons/car-unselected.svg';
import triangleIcon from '../../assets/icons/ic-vector-triangle.svg';
import walletIcon from '../../assets/icons/wallet.svg';

const MenuLeft: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage src="https://api.adorable.io/avatars/250/abott@adorable.png" />
      </AvatarContainer>

      <Icon src={homeIcon} style={{ opacity: 1 }} />
      <Icon src={personIcon} />
      <Icon src={carUnselectedIcon} />
      <Icon src={triangleIcon} />
      <Icon src={walletIcon} />
    </Container>
  );
};

export default MenuLeft;
