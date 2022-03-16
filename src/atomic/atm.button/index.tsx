import React from 'react';
import Loading from 'react-loading';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
  return (
    <button disabled={isLoading} {...rest}>
      {isLoading && <Loading type='bars' color='#000' height={20} width={20} />}
      {children}
    </button>
  );
}
