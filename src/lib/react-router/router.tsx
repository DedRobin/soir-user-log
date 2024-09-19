import { createBrowserRouter } from 'react-router-dom';
import Test from '../../components/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
]);

export default router;
