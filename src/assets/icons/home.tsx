import React from 'react';

import { FunctionComponent } from 'react';

interface HomeIconProps {
  width: string;
  height: string;
  fill: string;
}
export const HomeIcon: FunctionComponent<HomeIconProps> = ({
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
        id="Icon_ionic-md-home"
        data-name="Icon ionic-md-home"
        d="M11.481,25.154V17.769h5.538v7.385H22.65V14.077h3.6L14.25,3l-12,11.077h3.6V25.154Z"
        transform="translate(-2.25 -3)"
        fill={fill}
      />
    </svg>
  );
};
