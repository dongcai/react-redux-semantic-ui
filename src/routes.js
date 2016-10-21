import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { mapRoutes, isAuthenticated, isNotAuthenticated } from 'utils/routesUtils.js';
import { routes as routesModules } from '../plugins/front';
import {
  App, Chat, Home, Widgets, About,
  Register, Login, LoginSuccess, Survey, NotFound
} from 'containers';

export default store => {
  /**
   * Please keep routes in alphabetical order
   */
  const routes = navbarItems => (
    <Route path="/" component={App} navbarItems={navbarItems}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes requiring login */}
      <Route onEnter={isAuthenticated(store)}>
        <Route path="loginSuccess" component={LoginSuccess} />
        {/* <Route path="chatFeathers" component={ChatFeathers} /> */}
      </Route>

      {/* Routes disallow login */}
      <Route onEnter={isNotAuthenticated(store)}>
        <Route path="register" component={Register} />
      </Route>

      {/* Routes */}
      <Route path="chat" component={Chat} />
      <Route path="login" component={Login} />
      <Route path="about" component={About} />
      <Route path="survey" component={Survey} />
      <Route path="widgets" component={Widgets} />

      {routesModules(store)}

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );

  const navbarItems = mapRoutes(routes(), component => component.navbarItem).filter(v => v !== undefined);

  return routes(navbarItems);
};
