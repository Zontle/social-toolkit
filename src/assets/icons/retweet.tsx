import { FunctionComponent } from 'react';

interface RetweetIconProps {
  width: string;
  height: string;
  fill: string;
  stroke: string;
}
export const RetweetIcon: FunctionComponent<RetweetIconProps> = ({
  width,
  height,
  fill,
  stroke
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g
        id="Group_85"
        data-name="Group 85"
        transform="translate(-902.152 -192.586)"
      >
        <path
          id="Path_11"
          data-name="Path 11"
          d="M25.5,1.5l3.284,3.284L25.5,8.067"
          transform="translate(891.145 192.5)"
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          d="M4.5,12.425V10.784A3.284,3.284,0,0,1,7.784,7.5H19.276"
          transform="translate(899.652 189.519)"
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_13"
          data-name="Path 13"
          d="M7.784,29.067,4.5,25.784,7.784,22.5"
          transform="translate(898.652 181.933)"
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_14"
          data-name="Path 14"
          d="M19.276,19.5v1.642a3.284,3.284,0,0,1-3.284,3.284H4.5"
          transform="translate(899.652 183.556)"
          fill={fill}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
