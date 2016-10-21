import React from 'react';
import { Route } from 'react-router';

export function routes(store) {
  return (
    <Route>
      {require('./chat/routes')(store)}
    </Route>
  );
}
