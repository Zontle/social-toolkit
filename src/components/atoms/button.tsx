import { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: string;
  size?: string;
}
const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  type,
  size,
}) => {
  return (
    <button className={`btn ${type} ${className} ${size}`}>{children}</button>
  );
};

export default Button;
