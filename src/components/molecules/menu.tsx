import React, { FunctionComponent, useState } from 'react';

import { SidebarElement, MenuOnChange } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//Hooks
import { useMobile } from '../../hooks/responsive.hook';
export interface MenuProps {
  topIcons?: Array<SidebarElement>;
  centerIcons?: Array<SidebarElement>;
  bottomIcons?: Array<SidebarElement>;
  wake?: SidebarElement;
  active?: 'notifications' | 'home' | 'settings' | 'messages';
  onChange?: MenuOnChange | Function;
  children?: React.ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({
  children,
  topIcons,
  centerIcons,
  bottomIcons,
  active,
  onChange = () => ({})
}) => {
  const isMobile = useMobile();
  const [visible, setVisible] = useState<boolean>(false);
  if (isMobile) {
    return (
      <div className="container-mobile">
        <header>
          <FontAwesomeIcon
            onClick={() => setVisible(true)}
            icon={faBars}
            className="menu-trigger"
          />
        </header>
        <main>{children}</main>
        <div className={`sidebar-drawer ${visible ? 'visible' : 'hidden'}`}>
          <div className="cover" onClick={() => setVisible(false)}></div>
          <div className="container-menu">
            <div className="sidebar-navigation">
              <div className="top-sidebar">
                <div className="detail-top-icon">
                  {topIcons?.length && (
                    <div className="icon">{topIcons.map(x => x.icon)}</div>
                  )}
                </div>

                <div className="center-sidebar">
                  <ul>
                    {centerIcons?.map((x, i) => (
                      <li key={i} onClick={() => onChange(x.slug)}>
                        <div
                          className={`center-sidebar-element ${
                            x.className || ''
                          } ${active === x.slug && 'active'}`}
                        >
                          {x.icon}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bottom-sidebar">
                {bottomIcons?.length && (
                  <div
                    className={`icon  ${active === 'settings' ? 'active' : ''}`}
                    onClick={() => onChange('settings')}
                  >
                    {bottomIcons.map(x => x.icon)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-menu">
      <div className="sidebar-navigation">
        <div className="top-sidebar">
          <div className="detail-top-icon">
            {topIcons?.length && (
              <div className="icon">{topIcons.map(x => x.icon)}</div>
            )}
          </div>

          <div className="center-sidebar">
            <ul>
              {centerIcons?.map((x, i) => (
                <li key={i} onClick={() => onChange(x.slug)}>
                  <div
                    className={`center-sidebar-element ${x.className || ''} ${
                      active === x.slug && 'active'
                    }`}
                  >
                    {x.icon}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom-sidebar">
          {bottomIcons?.length && (
            <div
              className={`icon  ${active === 'settings' ? 'active' : ''}`}
              onClick={() => onChange('settings')}
            >
              {bottomIcons.map(x => x.icon)}
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Menu;
