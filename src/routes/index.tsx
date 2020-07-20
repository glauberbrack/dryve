import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Clients from '../pages/Clients';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Clients} path="/clients" />
    </BrowserRouter>
  );
};

export default Routes;
