import LSKey from '@/hooks/keys';
import { useLocalStorage } from '@/hooks/localStorage';
import { Path } from '@/lib/react-router/router';
import { useEffect } from 'react';

export default function Main() {
  const [, setLastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);

  useEffect(() => {
    setLastVisitedPath(Path.Main);
  }, [setLastVisitedPath]);

  return <div>Добро пожаловать</div>;
}
