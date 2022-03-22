import { FunctionComponent } from 'react';
import { ISidebarElements } from '../../types';

export interface MenuProps {
  topIcons?: Array<ISidebarElements>;
  centerIcons?: Array<ISidebarElements>;
  bottomIcons?: Array<ISidebarElements>;
  wake?: ISidebarElements;
}

const Menu: FunctionComponent<MenuProps> = ({
  children,
  topIcons,
  centerIcons,
  bottomIcons,
  wake
}) => {
  return (
    <div className="container-menu">
      <div className="sidebar-navigation">
        <div className="top-sidebar">
          <div className="detail-top-icon">
            {topIcons?.length
              ? (
                <div className="icon">{topIcons.map((x, i) => x.icon)}</div>
              )
              : null}
            {wake ? <div className="wake">{wake.icon}</div> : null}
          </div>

          <div className="center-sidebar">
            <ul>
              {centerIcons?.map((x, i) => (
                <li key={i}>
                  <div
                    className={`center-sidebar-element ${
                      x.className ? x.className : ''
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
          {bottomIcons?.length
            ? (
              <div className="icon">{bottomIcons.map((x, i) => x.icon)}</div>
            )
            : null}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Menu;
