import React from 'react';

import { FunctionComponent } from 'react';

interface PlusIconProps {
  width: string;
  height: string;
  stroke: string;
}
export const PlusIcon: FunctionComponent<PlusIconProps> = ({
  width,
  height,
  stroke
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={'24'}
      height={'24'}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g
        id="Icon_feather-plus"
        data-name="Icon feather-plus"
        transform="translate(-6 -6)"
      >
        <path
          id="Path_3"
          data-name="Path 3"
          d="M18,7.5v21"
          transform="translate(0 0)"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M7.5,18h21"
          transform="translate(0 0)"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
