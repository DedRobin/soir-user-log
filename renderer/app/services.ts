import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Path } from './router';

export function navigateTo(
  path: string | null,
  navigate: (href: string, options?: NavigateOptions | undefined) => void
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
