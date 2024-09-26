'use client';

import LSKey from '@/hooks/keys';
import { useLocalStorage } from '@/hooks/localStorage';
import { useEffect } from 'react';
import { Path } from '../router';

export default function Main() {
  const [, setLastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);

  useEffect(() => {
    setLastVisitedPath(Path.Main);
  }, [setLastVisitedPath]);

  return (
    <div className="flex flex-col justify-center gap-0">
      <h2 className="text-3xl text-center">Добро пожаловать</h2>
    </div>
  );
}
