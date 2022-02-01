import { FunctionComponent } from "react";

interface SettingsIconProps {
  width: string;
  height: string;
  fill: string;
}
export const SettingsIcon: FunctionComponent<SettingsIconProps> = ({width, height, fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        id="Icon_ionic-ios-settings"
        data-name="Icon ionic-ios-settings"
        d="M26.519,16.5A3.088,3.088,0,0,1,28.5,13.619a12.242,12.242,0,0,0-1.481-3.569,3.13,3.13,0,0,1-1.256.269,3.081,3.081,0,0,1-2.819-4.338A12.2,12.2,0,0,0,19.381,4.5a3.086,3.086,0,0,1-5.763,0A12.242,12.242,0,0,0,10.05,5.981a3.081,3.081,0,0,1-2.819,4.338,3.028,3.028,0,0,1-1.256-.269A12.512,12.512,0,0,0,4.5,13.625a3.087,3.087,0,0,1,.006,5.762,12.242,12.242,0,0,0,1.481,3.569,3.083,3.083,0,0,1,4.069,4.069,12.313,12.313,0,0,0,3.569,1.481,3.08,3.08,0,0,1,5.75,0,12.242,12.242,0,0,0,3.569-1.481,3.086,3.086,0,0,1,4.069-4.069,12.313,12.313,0,0,0,1.481-3.569A3.1,3.1,0,0,1,26.519,16.5Zm-9.962,4.994a5,5,0,1,1,5-5A5,5,0,0,1,16.556,21.494Z"
        transform="translate(-4.5 -4.5)"
        fill={fill}
      />
    </svg>
  );
};
