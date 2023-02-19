import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { map } from 'lodash';

import React from 'react';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              route.layout ? (
                <route.layout>
                  <route.element />
                </route.layout>
              ) : (
                <route.element />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
