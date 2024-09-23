import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

interface LinkButtonProps extends PropsWithChildren {
  to: string;
}

export default function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        [
          isActive ? 'bg-zinc-800 text-white' : '',
          'block bg-black py-2 px-5 hover:text-white hover:bg-zinc-800 transition-colors duration-300',
        ].join(' ')
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
