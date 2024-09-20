import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { navigateTo } from './services';
import Header from '@/components/Header';
import LSKey from '@/hooks/keys';
import Footer from '@/components/Footer';
import { useLocalStorage } from '@/hooks/localStorage';

export default function App() {
  const navigate = useNavigate();
  const [lastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);

  useEffect(() => {
    navigateTo(lastVisitedPath, navigate);
  }, [lastVisitedPath, navigate]);

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
