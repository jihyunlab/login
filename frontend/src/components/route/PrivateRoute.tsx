import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hook';
import { selectSignin } from '../../slices/authSlice';

export interface PrivateRouteProps {
  errorElement: React.ReactElement;
  children?: React.ReactNode;
}

function PrivateRoute({ errorElement }: PrivateRouteProps): React.ReactElement | null {
  const signin = useAppSelector(selectSignin);

  return signin ? <Outlet /> : errorElement;
}

export default PrivateRoute;
