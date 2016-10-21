import React from 'react';
import { Route } from 'react-router';
import { isAuthenticated } from '../../src/utils/routesUtils';
import { ChatFeathers } from './containers';

export default function routes(store) {
  return (
    <Route onEnter={isAuthenticated(store)} key="chatFeathers">
      <Route path="chatFeathers" component={ChatFeathers} />
    </Route>
  );
}
