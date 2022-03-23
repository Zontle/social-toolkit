import { AstronautIcon } from '../assets/icons/astronaut';
import { BellIcon } from '../assets/icons/bell';
import { HomeIcon } from '../assets/icons/home';
import { MessageIcon } from '../assets/icons/message';
import { PlusIcon } from '../assets/icons/plus';
import { RainbowIcon } from '../assets/icons/rainbow';
import { SettingsIcon } from '../assets/icons/settings';
import { SidebarElement } from '../types';

export const SidebarTopElements: SidebarElement[] = [
  { icon: <AstronautIcon width="23.815" height="27.218" fill="#328bd2" /> }
];

export const SidebarCenterElements: SidebarElement[] = [
  {
    icon: <PlusIcon width="24" height="24" stroke="#d33682" />,
    className: 'icon-plus',
    slug: 'plus'
  },
  {
    icon: <HomeIcon width="24" height="22.154" fill="#1d5175" />,
    slug: 'home'
  },
  {
    icon: <BellIcon width="21" height="24" fill="#1d5175" />,
    slug: 'notifications'
  },
  {
    icon: <MessageIcon width="24" height="24" fill="#1d5175" />,
    slug: 'messages'
  }
];

export const SidebarBottomElements: SidebarElement[] = [
  {
    icon: <SettingsIcon width="24" height="24.006" fill="#328bd2" />,
    slug: 'settings'
  }
];

export const Wake: SidebarElement = {
  icon: (
    <RainbowIcon
      widthSvg="24"
      heightSvg="30"
      widthWakes="150"
      heightOne="13"
      heightTwo="8"
      heightThree="3"
      fillOne="#328bd2"
      fillTwo="#d33682"
      fillThree="#eee8d5"
    />
  )
};
