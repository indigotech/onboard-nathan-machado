import { Color, Spacing } from 'app/styles';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const ContainerStyled = styled.div<ContainerProps>`
  background: ${Color.Background};
  border-radius: ${Spacing.Small};
  border: ${Spacing.XXSmall} solid ${Color.Acessory};
  padding: ${Spacing.Small};
  width: 100%;
  color: ${Color.Acessory};
  display: flex;
  align-items: center;
  margin-bottom: ${Spacing.XSmall};

  transition: border-color 0.3s, color 0.3s;

  svg,
  label {
    margin-right: ${Spacing.Medium};
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${Color.Error};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${Color.Secondary};
      border-color: ${Color.Secondary};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${Color.Secondary};
    `}
`;

export const InputStyled = styled.input`
  background: ${Color.Transparent};
  flex: 1;
  border: 0;
  color: ${Color.TextTitle};
  outline: none;

  &::placeholder {
    color: ${Color.TextPlaceholder};
  }
`;
