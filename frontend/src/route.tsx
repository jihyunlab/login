import { Navigate, RouteObject } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import PrivateRoute from './components/route/PrivateRoute';

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: 'login', element: <Login /> },
  {
    element: <PrivateRoute errorElement={<Navigate to="/login" replace />} />,
    children: [{ path: 'home', element: <Home /> }],
  },
  { path: '*', element: <Navigate to="/login" replace /> },
];
