import LinkButton from '@/components/UI/LinkButton';
import LSKey from '@/hooks/keys';
import { useLocalStorage } from '@/hooks/localStorage';
import { Path } from '@/lib/react-router/router';
import { useEffect } from 'react';

export default function Main() {
  const [, setLastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);

  useEffect(() => {
    setLastVisitedPath(Path.Main);
  }, [setLastVisitedPath]);

  return (
    <div className="flex flex-col justify-center gap-0">
      <h2 className="text-3xl text-center">Меню</h2>
      <LinkButton to={Path.Main}>Главная</LinkButton>
      <LinkButton to={Path.Visitors}>Посетители</LinkButton>
    </div>
  );
}
