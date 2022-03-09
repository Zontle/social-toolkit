import { FunctionComponent, ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: string;
  size?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  type,
  size,
  onClick,
}) => {
  return (
    <button className={`btn ${type} ${className} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
