import React from 'react';

import GlobalStyles from './styles/global';
import { ContainerFull, Content, MainContent } from './styles/appStyles';

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
        <Content>
          <MenuTop />
          <MainContent>
            {/* Routing system */}
            <Routes />
            {/* Routing system */}
          </MainContent>
          <Footer />
        </Content>
      </ContainerFull>
    </>
  );
};

export default App;
