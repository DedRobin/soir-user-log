import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps extends PropsWithChildren {
  to: string;
}

export default function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <Link
      className="block bg-black py-2 px-5 border border-black hover:border-white transition-colors duration-300"
      to={to}
    >
      {children}
    </Link>
  );
}
