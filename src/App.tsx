import React from 'react';

import GlobalStyles from './styles/global';
import { ContainerFull, MainContent } from './styles/appStyles';

import MenuLeft from './components/MenuLeft';
import MenuTop from './components/MenuTop';
import Footer from './components/Footer';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <ContainerFull>
        <MenuLeft />
        <MainContent>
          <MenuTop />
          {/* Routing system */}
          <Routes />
          {/* Routing system */}
          <Footer />
        </MainContent>
      </ContainerFull>
    </>
  );
};

export default App;
