import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

export interface RouteProps {
  key: string;
  path: string;
  element: React.ReactElement;
  loginRequired?: boolean;
  errorElement?: React.ReactElement;
  routes?: RouteProps[];
}

export interface RouterProps {
  routes: RouteProps[];
}

function Router({ routes }: RouterProps) {
  const router = (routes: RouteProps[]): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];

      if (!route.loginRequired) {
        elements.push(
          <Route key={route.key} path={route.path} element={route.element}>
            {route.routes && router(route.routes)}
          </Route>
        );
      } else {
        elements.push(
          <Route
            key={route.key}
            element={<PrivateRoute errorElement={route.errorElement ? route.errorElement : null} />}
          >
            <Route key={route.key} path={route.path} element={route.element}>
              {route.routes && router(route.routes)}
            </Route>
          </Route>
        );
      }
    }

    return elements;
  };

  return (
    <Fragment>
      <Routes>{router(routes)}</Routes>
    </Fragment>
  );
}

export default Router;
