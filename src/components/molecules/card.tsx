import React from 'react';

import { FunctionComponent } from 'react';

export interface CardProps {
  className?: string;
  active?: boolean;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  className = '',
  active = false
}) => {
  return (
    <div className={`card ${className} ${active && 'active'}`}>{children}</div>
  );
};
