import React, { ReactElement, useRef, useState } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { ContainerStyled, InputStyled } from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  icon?: ReactElement<IconType>;
  hasError?: boolean;
}

export function Input({ hasError, labelName, icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  };

  return (
    <ContainerStyled isFocused={isFocused} isFilled={isFilled} isErrored={hasError}>
      {labelName && <label>{labelName}:</label>}
      {icon}
      <InputStyled ref={inputRef} onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
    </ContainerStyled>
  );
}
