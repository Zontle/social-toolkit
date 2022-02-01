import { FunctionComponent } from "react";
import { AstronautIcon } from "../../assets/icons/astronaut";
import { BellIcon } from "../../assets/icons/bell";
import { HomeIcon } from "../../assets/icons/home";
import { MessageIcon } from "../../assets/icons/message";
import { PlusIcon } from "../../assets/icons/plus";
import { RainbowIcon } from "../../assets/icons/rainbow";
import { SettingsIcon } from "../../assets/icons/settings";

const SidebarElements = [
  {
    icon: <PlusIcon width="24" height="24" stroke="#d33682" />,
    className: "icon-plus",
  },
  { icon: <HomeIcon width="24" height="22.154" fill="#1d5175" /> },
  { icon: <BellIcon width="21" height="24" fill="#1d5175" /> },
  { icon: <MessageIcon width="24" height="24" fill="#1d5175" /> },
];

interface MenuProps {}

export const Menu: FunctionComponent<MenuProps> = ({ children }) => {
  return (
    <div className="container-menu">
      <div className="sidebar-navigation">
        <div className="top-sidebar">
          <div className="detail-top-icon">
            <div className="icon">
              <AstronautIcon width="23.815" height="27.218" fill="#328bd2" />
            </div>
            <div className="wake">
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
            </div>
          </div>

          <div className="center-sidebar">
            <ul>
              {SidebarElements.map((x, i) => (
                <li key={i}>
                  <div
                    className={`center-sidebar-element ${
                      x.className ? x.className : ""
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
          <div className="wake">
            <RainbowIcon
              widthSvg="24"
              heightSvg="20"
              widthWakes="150"
              heightOne="13"
              heightTwo="8"
              heightThree="3"
              fillOne="#328bd2"
              fillTwo="#d33682"
              fillThree="#eee8d5"
            />
          </div>
          <div className="icon">
            <SettingsIcon width="24" height="24.006" fill="#328bd2" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
