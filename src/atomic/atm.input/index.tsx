import React, { ReactElement, useState } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  icon?: ReactElement<IconType>;
}

export function Input({ labelName, icon, ...rest }: InputProps) {
  return (
    <div>
      {labelName && <label>{labelName}</label>}
      {icon}
      <input {...rest} />
    </div>
  );
}
