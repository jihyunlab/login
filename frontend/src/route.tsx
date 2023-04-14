import { Navigate } from 'react-router-dom';
import { RouteProps } from './components/route/Router';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

export const routes: Array<RouteProps> = [
  { key: '/', path: '/', element: <Navigate to="/home" replace /> },
  { key: '/login', path: 'login', element: <Login /> },
  {
    key: '/home',
    path: 'home',
    element: <Home />,
    loginRequired: true,
    errorElement: <Navigate to="/login" replace />,
  },
  { key: '*', path: '*', element: <Navigate to="/login" replace /> },
];
