import { FunctionComponent } from 'react';

interface RainbowIconProps {
  widthSvg: string;
  heightSvg: string;
  widthWakes: string;
  heightOne: string;
  heightTwo: string;
  heightThree: string;
  fillOne: string;
  fillTwo: string;
  fillThree: string;
  viewBox?: string;
}
export const RainbowIcon: FunctionComponent<RainbowIconProps> = ({
  widthSvg,
  heightSvg,
  widthWakes,
  heightOne,
  heightTwo,
  heightThree,
  fillOne,
  fillTwo,
  fillThree,
  viewBox,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthSvg}
      height={heightSvg}
      viewBox={viewBox || `0 0 ${widthSvg} ${heightSvg}`}
    >
      <g id="Group_375" data-name="Group 375" transform="translate(-712 -480)">
        <rect
          id="Rectangle_167"
          data-name="Rectangle 167"
          width={widthWakes}
          height={heightOne}
          transform="translate(712 630) rotate(-90)"
          fill={fillOne}
        />
        <rect
          id="Rectangle_168"
          data-name="Rectangle 168"
          width={widthWakes}
          height={heightTwo}
          transform="translate(725 630) rotate(-90)"
          fill={fillTwo}
        />
        <rect
          id="Rectangle_169"
          data-name="Rectangle 169"
          width={widthWakes}
          height={heightThree}
          transform="translate(733 630) rotate(-90)"
          fill={fillThree}
        />
      </g>
    </svg>
  );
};
