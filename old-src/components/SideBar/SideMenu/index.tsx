import LinkButton from '@/components/UI/LinkButton';
import { Path } from '@/lib/react-router/router';

export default function SideMenu() {
  return (
    <ul className="flex flex-col">
      <li>
        <LinkButton to={Path.Main}>Главная</LinkButton>
      </li>
      <li>
        <LinkButton to={Path.Visitors}>Посетители</LinkButton>
      </li>
    </ul>
  );
}
