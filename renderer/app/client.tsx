'use client';

import { useEffect } from 'react';
import LSKey from '@/hooks/keys';
import { useLocalStorage } from '@/hooks/localStorage';
import { useRouter } from 'next/navigation';
import { navigateTo } from './services';

export default function Root() {
  const [lastVisitedPath] = useLocalStorage(LSKey.LastVisitedPath);
  const router = useRouter();

  useEffect(() => {
    navigateTo(lastVisitedPath, router.push);
  }, [lastVisitedPath, router.push]);

  return <></>;
}
