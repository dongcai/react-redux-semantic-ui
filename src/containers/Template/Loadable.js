import React from 'react';
import Loadable from 'react-loadable';

const TemplatehLoadable = Loadable({
  loader: () => import('./Template'),
  loading: () => <div>Loading</div>
});

export default TemplatehLoadable;
