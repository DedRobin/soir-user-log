'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface LinkButtonProps extends PropsWithChildren {
  path: string;
}

export default function LinkButton({ path, children }: LinkButtonProps) {
  const currentPath = usePathname();

  return (
    <Link
      className={[
        'block bg-black py-2 px-5 hover:text-white hover:bg-zinc-800 transition-colors duration-300',
        currentPath === `${path}/` && 'bg-zinc-800 text-white',
      ].join(' ')}
      href={path}
    >
      {children}
    </Link>
  );
}
