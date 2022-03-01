import { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: string;
}
const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  type,
}) => {
  return <button className={`btn ${type} ${className}`}>{children}</button>;
};

export default Button;
