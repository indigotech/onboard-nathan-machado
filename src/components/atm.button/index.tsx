import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

export function Button({isLoading, loadingText, children, ...rest}: ButtonProps) {

  return (
    <button {...rest}>{ isLoading ? loadingText : children}</button>
  );
};