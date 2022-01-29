import { FunctionComponent } from "react";
import IconAstronaut from "../../assets/icons/astronaut.svg";
import IconBell from "../../assets/icons/bell.svg";
import IconHome from "../../assets/icons/home.svg";
import IconMessage from "../../assets/icons/message.svg";
import IconPlus from "../../assets/icons/plus.svg";
import IconSetting from "../../assets/icons/settings.svg";


const SidebarElements = [
  { icon: IconPlus, className: "icon-plus" },
  { icon: IconHome },
  { icon: IconBell },
  { icon: IconMessage },
];

interface MenuProps {}

export const Menu: FunctionComponent<MenuProps> = ({ children }) => {
  return (
    <div className="container-menu">
      <div className="sidebar-navigation">
        <div className="top-sidebar">
          <div className="detail-top-icon">
            <div className="icon">
              <img alt="icon" src={IconAstronaut} />
            </div>
            <div className="wake">
              <div className="wake-blue"></div>
              <div className="wake-pink"></div>
              <div className="wake-white"></div>
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
                    <img alt="icon" src={x.icon} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom-sidebar">
          <div className="icon">
            <img alt="setting" src={IconSetting} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
