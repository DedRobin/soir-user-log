import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        theme="dark"
        progressStyle={{ backgroundColor: '#F3F3F3' }}
      />
    </>
  );
}
