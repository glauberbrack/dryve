import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
