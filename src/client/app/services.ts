import { Path } from '@/lib/react-router/router';
import { NavigateOptions, To } from 'react-router-dom';

export function navigateTo(
  path: string | null,
  navigate: (to: To, options?: NavigateOptions) => void
) {
  switch (path) {
    case Path.Visitors:
      navigate(Path.Visitors);
      break;
    case Path.Main:
    default:
      navigate(Path.Main);
      break;
  }
}
