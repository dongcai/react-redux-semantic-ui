import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, NotFound } from 'containers';
import About from 'containers/About/Loadable';
import Chat from 'containers/Chat/Loadable';
import ChatFeathers from 'containers/ChatFeathers/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Logout from 'containers/Logout/Loadable';
import Register from 'containers/Register/Loadable';
import Survey from 'containers/Survey/Loadable';
import Template from 'containers/Template/Loadable';
import Widgets from 'containers/Widgets/Loadable';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.user === null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { path: '/chat', component: Chat },
      { path: '/chat-with-feathers', component: isAuthenticated(ChatFeathers) },
      { path: '/login', component: Login },
      { path: '/logout', component: Logout },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/register', component: isNotAuthenticated(Register) },
      { path: '/survey', component: Survey },
      { path: '/template', component: Template },
      { path: '/widgets', component: Widgets },
      { component: NotFound }
    ]
  }
];

export default routes;
