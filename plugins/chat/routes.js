import React from 'react';
import { Route } from 'react-router';
import { isAuthenticated } from '../../src/utils/routesUtils';

if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

export default function routes(store) {
  return (
    <Route
      key="chatFeathers"
      path="chatFeathers"
      onEnter={isAuthenticated(store)}
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./containers/ChatFeathers/ChatFeathers'));
        });
      }} />
  );
}
