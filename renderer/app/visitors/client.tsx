'use client';

import VisitorForm from '@/components/VisitorForm';
import LSKey from '@/hooks/keys';
import { useLocalStorage } from '@/hooks/localStorage';
import { useEffect } from 'react';
import { Path } from '../router';

export default function Visitors() {
  const [, setLastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);

  useEffect(() => {
    setLastVisitedPath(Path.Visitors);
  }, [setLastVisitedPath]);

  return (
    <div className="visitors-page grow flex items-center gap-2 p-2">
      <div className="grow *:m-auto *:w-1/2">
        <VisitorForm />
      </div>
    </div>
  );
}
