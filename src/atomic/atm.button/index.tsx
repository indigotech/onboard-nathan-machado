import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, ...rest}: ButtonProps) {

  return (
    <button {...rest}>{children}</button>
  );
};
