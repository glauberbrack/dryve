import React, { useState, useCallback } from 'react';

import { Container, AvatarContainer, AvatarImage, Icon } from './styles';

import homeIcon from '../../assets/icons/ic-home.svg';
import personIcon from '../../assets/icons/ic-person.svg';
import carUnselectedIcon from '../../assets/icons/car-unselected.svg';
import triangleIcon from '../../assets/icons/ic-vector-triangle.svg';
import walletIcon from '../../assets/icons/wallet.svg';

import MenuLeftFull from './MenuLeftFull';

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
    <div onClick={handleMenuClick}>
      {!clicked ? (
        <Container>
          <AvatarContainer>
            <AvatarImage src="https://api.adorable.io/avatars/hi_mom" />
          </AvatarContainer>

          <Icon src={homeIcon} style={{ opacity: 1 }} />
          <Icon src={personIcon} />
          <Icon src={carUnselectedIcon} />
          <Icon src={triangleIcon} />
          <Icon src={walletIcon} />
        </Container>
      ) : (
        <MenuLeftFull />
      )}
    </div>
  );
};

export default MenuLeft;
