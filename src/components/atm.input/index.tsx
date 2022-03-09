import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({labelName, icon: Icon, ...rest}: InputProps) {

  return (
    <div>
      {labelName && <label>{labelName}</label>}
      {Icon && <Icon size={20}></Icon>}
      <input {...rest} />
    </div>
  );
};