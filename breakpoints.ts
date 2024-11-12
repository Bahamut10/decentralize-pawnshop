import { createBreakpoint } from 'react-use';
import { screens } from './tailwind.screens';

export const DEVICES = {
  PHONE: 'phone',
  TABLET: 'tablet',
  LAPTOP: 'laptop',
  DESKTOP: 'desktop',
};

export const breakpoints = {
  [DEVICES.PHONE]: 0,
  [DEVICES.TABLET]: Number.parseInt(screens.tablet),
  [DEVICES.LAPTOP]: Number.parseInt(screens.laptop),
  [DEVICES.DESKTOP]: Number.parseInt(screens.desktop),
};

const useBreakpoint = createBreakpoint(
  breakpoints
) as () => keyof typeof breakpoints;

export default useBreakpoint;
