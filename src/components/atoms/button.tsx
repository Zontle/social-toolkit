import { FunctionComponent, ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  type?: 'default' | 'primary' | 'reverse';
  size?: 'small' | 'normal' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button: FunctionComponent<ButtonProps> = ({
  children,
  className = '',
  type = 'default',
  size = 'normal',
  onClick,
}) => {
  return (
    <button className={`btn ${type} ${className} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
