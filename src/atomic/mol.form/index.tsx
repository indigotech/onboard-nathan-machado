import React from 'react';
import { FormStyled } from './style';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  isLoading?: boolean;
}

export function Form({ children, ...rest }: FormProps) {
  return <FormStyled {...rest}>{children}</FormStyled>;
}
