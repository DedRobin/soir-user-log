import { Path } from '@/lib/react-router/router';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="flex gap-2">
      <li>
        <NavLink
          to={Path.Main}
          className={({ isActive, isPending }) =>
            isPending ? '' : isActive ? '' : ''
          }
        >
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink
          to={Path.Visitors}
          className={({ isActive, isPending }) =>
            isPending ? '' : isActive ? '' : ''
          }
        >
          Посетители
        </NavLink>
      </li>
    </ul>
  );
}
