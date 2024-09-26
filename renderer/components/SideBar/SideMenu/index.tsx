import { Path } from '@/app/router';
import LinkButton from '@/components/UI/LinkButton';

export default function SideMenu() {
  return (
    <ul className="flex flex-col">
      <li>
        <LinkButton path={Path.Main}>Главная</LinkButton>
      </li>
      <li>
        <LinkButton path={Path.Visitors}>Посетители</LinkButton>
      </li>
    </ul>
  );
}
