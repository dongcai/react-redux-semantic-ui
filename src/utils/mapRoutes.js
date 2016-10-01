export default function mapRoutes(route, cb = c => c) {
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
