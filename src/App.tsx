import { RouterProvider } from 'react-router-dom';
import router from './lib/react-router/router';

export default function App() {
  return <RouterProvider router={router} />;
}
