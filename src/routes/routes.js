import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../layout/Layout';

const routes = [
  { path: '/', element: Home, exact: true, layout: Layout },
  { path: '*', element: ErrorPage },
];

export default routes;
