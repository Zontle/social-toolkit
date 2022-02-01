import { FunctionComponent } from "react";

interface AstronautIconProps {
  width: string;
  height: string;
  fill: string;
}
export const AstronautIcon: FunctionComponent<AstronautIconProps> = ({width, height, fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        id="Icon_awesome-user-astronaut"
        data-name="Icon awesome-user-astronaut"
        d="M3.4,11.908H4.12a8.494,8.494,0,0,0,15.576,0h.718a.853.853,0,0,0,.851-.851v-5.1a.853.853,0,0,0-.851-.851H19.7A8.494,8.494,0,0,0,4.12,5.1H3.4a.853.853,0,0,0-.851.851v5.1A.853.853,0,0,0,3.4,11.908ZM5.529,7.23A2.368,2.368,0,0,1,8.08,5.1h7.655A2.368,2.368,0,0,1,18.287,7.23V8.506a5.1,5.1,0,0,1-5.1,5.1H10.632a5.1,5.1,0,0,1-5.1-5.1Zm3.827,3.827.638-1.914,1.914-.638L9.994,7.868,9.356,5.954,8.718,7.868,6.8,8.506l1.914.638Zm8.059,6.028a10.136,10.136,0,0,1-11.015,0A7.125,7.125,0,0,0,0,24.156v.51a2.552,2.552,0,0,0,2.552,2.552H6.8v-3.4a1.7,1.7,0,0,1,1.7-1.7h6.8a1.7,1.7,0,0,1,1.7,1.7v3.4h4.253a2.552,2.552,0,0,0,2.552-2.552v-.51A7.125,7.125,0,0,0,17.415,17.085Zm-2.956,6.73a.851.851,0,1,0,.851.851A.853.853,0,0,0,14.459,23.815Zm-5.1,0a.853.853,0,0,0-.851.851v2.552h1.7V24.666A.853.853,0,0,0,9.356,23.815Z"
        fill={fill}
      />
    </svg>
  );
};
