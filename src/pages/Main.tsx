import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
  return (
    <main>
      <div>Main</div>
      {children}
    </main>
  );
}
