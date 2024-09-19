import App from '@/App';
import Main from '@/pages/Main';
import Visitors from '@/pages/Visitors';
import { createBrowserRouter } from 'react-router-dom';

export enum Path {
  App = '/',
  Main = '/main',
  Visitors = '/visitors',
}

const router = createBrowserRouter([
  {
    path: Path.App,
    element: <App />,
    children: [
      {
        path: Path.Main,
        element: <Main />,
      },
      {
        path: Path.Visitors,
        element: <Visitors />,
      },
    ],
  },
]);

export default router;
