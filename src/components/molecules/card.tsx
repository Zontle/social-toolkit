import { FunctionComponent } from 'react';

interface CardProps {
  className?: string;
  active?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  className = '',
  active = false,
}) => {
  return (
    <div className={`card ${className} ${active && 'active'}`}>{children}</div>
  );
};
