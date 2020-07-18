import React from 'react';

import GlobalStyles from './styles/global';
import { ContainerFull, MainContent } from './styles/appStyles';

import MenuLeft from './components/MenuLeft';
import MenuTop from './components/MenuTop';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ContainerFull>
        <MenuLeft />
        <MainContent>
          <MenuTop />
          <Routes />
        </MainContent>
      </ContainerFull>
    </>
  );
};

export default App;
