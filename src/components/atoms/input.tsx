import { FunctionComponent, ReactNode, ChangeEventHandler } from 'react';

export interface InputProps {
  children?: ReactNode;
  className?: string;
  type?: string;
  size?: string;
  onChange?: ChangeEventHandler<any>;
  placeholder?: string;
  normalized?: boolean;
}
const Input: FunctionComponent<InputProps> = ({
  children,
  className,
  type,
  size,
  placeholder,
  normalized,
  onChange,
}) => {
  if (type === 'textarea') {
    return (
      <textarea
        className={`poster-textarea  ${className} ${size} ${
          normalized && 'normalized'
        }`}
        onChange={onChange}
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
    >
      {children}
    </input>
  );
};

export default Input;
