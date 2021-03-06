import React from 'react';

import { FunctionComponent } from 'react';

interface BellIconProps {
  width: string;
  height: string;
  fill: string;
}
export const BellIcon: FunctionComponent<BellIconProps> = ({
  width,
  height,
  fill
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        id="Icon_awesome-bell"
        data-name="Icon awesome-bell"
        d="M10.5,24a3,3,0,0,0,3-3h-6A3,3,0,0,0,10.5,24Zm10.1-7.018c-.906-.973-2.6-2.437-2.6-7.232a7.4,7.4,0,0,0-6-7.273V1.5a1.5,1.5,0,1,0-3,0v.977A7.4,7.4,0,0,0,3,9.75c0,4.8-1.695,6.259-2.6,7.232A1.465,1.465,0,0,0,0,18a1.5,1.5,0,0,0,1.5,1.5H19.5A1.5,1.5,0,0,0,21,18a1.464,1.464,0,0,0-.4-1.018Z"
        transform="translate(0)"
        fill={fill}
      />
    </svg>
  );
};
