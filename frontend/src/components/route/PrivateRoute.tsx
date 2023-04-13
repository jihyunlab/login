import { Outlet } from 'react-router-dom';
import { getToken } from '../../helpers/jwt';

export interface PrivateRouteProps {
  errorElement: React.ReactElement | null;
  children?: React.ReactNode;
}

function PrivateRoute({ errorElement }: PrivateRouteProps): React.ReactElement | null {
  return getToken() ? <Outlet /> : errorElement;
}

export default PrivateRoute;
