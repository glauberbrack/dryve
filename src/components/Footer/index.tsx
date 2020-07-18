import React from 'react';

import {
  Container,
  Separator,
  TextContainer,
  TextLeft,
  TextRight,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Separator />
      <TextContainer>
        <TextLeft>2020 © Dryve Tecnologia Ltda.</TextLeft>
        <TextRight>Versão 1.0.1</TextRight>
      </TextContainer>
    </Container>
  );
};

export default Footer;
