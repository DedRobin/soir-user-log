import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { navigateTo } from './services';
import LSKey from '../hooks/keys';
import { useLocalStorage } from '../hooks/localStorage';
import SideBar from '../components/SideBar';
import ToastProvider from '@/lib/react-toastify/provider';

export default function App() {
  const navigate = useNavigate();
  const [lastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);

  useEffect(() => {
    navigateTo(lastVisitedPath, navigate);
  }, [lastVisitedPath, navigate]);

  return (
    <ToastProvider>
      <SideBar />
      <div className="flex flex-col justify-center grow">
        <Outlet />
      </div>
    </ToastProvider>
  );
}
