import React from 'react';

import { FunctionComponent } from 'react';

interface CardMessageIconProps {
  width: string;
  height: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
}
export const CardMessageIcon: FunctionComponent<CardMessageIconProps> = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        id="Icon_feather-message-circle"
        data-name="Icon feather-message-circle"
        d="M21.5,12.528a7.914,7.914,0,0,1-.85,3.589,8.028,8.028,0,0,1-7.178,4.439,7.914,7.914,0,0,1-3.589-.85L4.5,21.5l1.794-5.383a7.914,7.914,0,0,1-.85-3.589A8.028,8.028,0,0,1,9.883,5.35a7.914,7.914,0,0,1,3.589-.85h.472A8.009,8.009,0,0,1,21.5,12.056Z"
        transform="translate(-3.5 -3.5)"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
