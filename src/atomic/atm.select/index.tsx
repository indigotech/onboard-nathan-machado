import React, { ReactElement, useState } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

interface OptionData {
  value: string;
  name?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionData[];
  placeholder?: string;
  labelName?: string;
  icon?: ReactElement<IconType>;
}

export function Select({ options, placeholder, labelName, icon, ...rest }: SelectProps) {
  return (
    <div>
      {labelName && <label>{labelName}</label>}
      {icon}
      <select value='' {...rest}>
        <option value='' disabled>
          {placeholder || 'Select your option'}
        </option>
        {options.map(({ name, value }) => {
          return (
            <option key={value} value={value}>
              {name || value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
