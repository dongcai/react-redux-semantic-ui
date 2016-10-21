import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';

export function mapRoutes(route, cb = c => c) {
  let result = [];

  if (Array.isArray(route)) {
    route.forEach(r => {
      result = result.concat(mapRoutes(r, cb));
    });

    return result;
  }

  const { component, components, children } = route.props;
  const childRoutes = children || route.childRoutes || [];
  ((component && [component]) || Object.values(components || {})).forEach(c => {
    result.push(cb(c, route));
  });
  [].concat(childRoutes).forEach(r => {
    result = result.concat(mapRoutes(r, cb));
  });

  return result;
}

export function loadAuthIfNeeded(store, cb) {
  if (!isAuthLoaded(store.getState())) {
    return store.dispatch(loadAuth()).then(() => cb());
  }
  return cb();
}

export function checkUser(store, cond, replace, cb) {
  const { auth: { user } } = store.getState();
  if (!cond(user)) replace('/');
  cb();
}

export function isAuthenticated(store) {
  return (nextState, replace, cb) => {
    loadAuthIfNeeded(store, () => checkUser(store, user => !!user, replace, cb));
  };
}

export function isNotAuthenticated(store) {
  return (nextState, replace, cb) => {
    loadAuthIfNeeded(store, () => checkUser(store, user => !user, replace, cb));
  };
}
