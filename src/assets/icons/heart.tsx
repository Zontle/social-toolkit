import React from 'react';

import { FunctionComponent } from 'react';

interface HeartIconProps {
  width: string;
  height: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
}
export const HeartIcon: FunctionComponent<HeartIconProps> = ({
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
        id="Icon_ionic-md-heart-empty"
        data-name="Icon ionic-md-heart-empty"
        d="M15.7,4.5a5.028,5.028,0,0,0-3.825,1.794A5.028,5.028,0,0,0,8.05,4.5,4.622,4.622,0,0,0,3.375,9.2c0,3.249,2.889,5.856,7.266,9.877l1.234,1.112,1.234-1.112c4.377-4.021,7.266-6.628,7.266-9.877A4.622,4.622,0,0,0,15.7,4.5ZM12.4,17.957l-.172.159-.351.319-.351-.319-.172-.159a51.942,51.942,0,0,1-5.014-4.986A6,6,0,0,1,4.687,9.2,3.4,3.4,0,0,1,5.655,6.78,3.326,3.326,0,0,1,8.05,5.808a3.748,3.748,0,0,1,2.824,1.328l1,1.189,1-1.189A3.734,3.734,0,0,1,15.7,5.808a3.342,3.342,0,0,1,2.4.973A3.406,3.406,0,0,1,19.067,9.2a6.027,6.027,0,0,1-1.651,3.768A52.047,52.047,0,0,1,12.4,17.957Z"
        transform="translate(-3.125 -4.25)"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
