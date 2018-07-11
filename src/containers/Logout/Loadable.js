import React from 'react';
import Loadable from 'react-loadable';

const LogoutLoadable = Loadable({
  loader: () => import('./Logout'),
  loading: () => <div>Loading</div>
});

export default LogoutLoadable;
