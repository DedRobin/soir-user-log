import App from '@/app/App';
import Main from '@/pages/Main';
import Visitors from '@/pages/Visitors';
import { createHashRouter } from 'react-router-dom';

export enum Path {
  App = '/',
  Main = '/main',
  Visitors = '/visitors',
}

const router = createHashRouter([
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
