import { FunctionComponent } from 'react';

interface MessageIconProps {
  width: string;
  height: string;
  fill: string;
}
export const MessageIcon: FunctionComponent<MessageIconProps> = ({ width, height, fill }) => {
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
        d="M28.5,15.833A11.173,11.173,0,0,1,27.3,20.9a11.333,11.333,0,0,1-10.133,6.267,11.173,11.173,0,0,1-5.067-1.2L4.5,28.5l2.533-7.6a11.173,11.173,0,0,1-1.2-5.067A11.333,11.333,0,0,1,12.1,5.7a11.173,11.173,0,0,1,5.067-1.2h.667A11.307,11.307,0,0,1,28.5,15.167Z"
        transform="translate(-4.5 -4.5)"
        fill={fill}
      />
    </svg>
  );
};
