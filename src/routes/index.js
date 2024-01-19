import { Navigate } from 'react-router';
import LandingPage from '../pages/Landing/LandingPage';

const routes = [
  {
    path: '',
    element: <Navigate to='/landing' />,
  },
  {
    path: 'landing',
    element: <LandingPage />,
  },
];

export { routes };
