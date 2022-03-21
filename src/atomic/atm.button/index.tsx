import React from 'react';
import { Spacing } from 'app/styles';
import { ButtonStyled, LoadingStyled } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
  return (
    <ButtonStyled disabled={isLoading} {...rest}>
      {isLoading ? <LoadingStyled type='bars' height={Spacing.Large} width={Spacing.Large} /> : children}
    </ButtonStyled>
  );
}
