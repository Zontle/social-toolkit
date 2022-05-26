import React from 'react';

import { FunctionComponent, ReactNode, ChangeEventHandler } from 'react';

export interface InputProps {
  children?: ReactNode;
  className?: string;
  type?: string;
  size?: string;
  onChange?: ChangeEventHandler<any>;
  placeholder?: string;
  normalized?: boolean;
  value?: string;
}
const Input: FunctionComponent<InputProps> = ({
  children,
  className = '',
  type = 'input',
  size = 'normal',
  placeholder,
  normalized = false,
  value = '',
  onChange
}) => {
  if (type === 'textarea') {
    return (
      <textarea
        className={`poster-textarea  ${className} ${size} ${
          normalized && 'normalized'
        }`}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      >
        {children}
      </textarea>
    );
  }
  return (
    <input
      className={`poster-input  ${className} ${size} ${
        normalized && 'normalized'
      }`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    >
      {children}
    </input>
  );
};

export default Input;
