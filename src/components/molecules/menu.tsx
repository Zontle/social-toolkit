import React from 'react';

import { FunctionComponent } from 'react';
import { SidebarElement, MenuOnChange } from '../../types';

export interface MenuProps {
  topIcons?: Array<SidebarElement>;
  centerIcons?: Array<SidebarElement>;
  bottomIcons?: Array<SidebarElement>;
  wake?: SidebarElement;
  active?: 'notifications' | 'home' | 'settings' | 'messages';
  onChange?: MenuOnChange;
}

const Menu: FunctionComponent<MenuProps> = ({
  children,
  topIcons,
  centerIcons,
  bottomIcons,
  wake,
  active,
  onChange = () => ({})
}) => {
  return (
    <div className="container-menu">
      <div className="sidebar-navigation">
        <div className="top-sidebar">
          <div className="detail-top-icon">
            {topIcons?.length && (
              <div className="icon">{topIcons.map(x => x.icon)}</div>
            )}
            {wake ? <div className="wake">{wake.icon}</div> : null}
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
          {wake ? <div className="wake">{wake.icon}</div> : null}
          {bottomIcons?.length && (
            <div className="icon">{bottomIcons.map(x => x.icon)}</div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Menu;
