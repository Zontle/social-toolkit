import { FunctionComponent } from 'react';

interface CardProps {
  className?: string;
}

export const Card: FunctionComponent<CardProps> = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};
