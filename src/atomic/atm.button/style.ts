import { Color, FontSize, FontWeight, Spacing } from 'app/styles';
import styled from 'styled-components';
import Loading from 'react-loading';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${Color.Acessory};
  border-radius: ${Spacing.Small};
  border: 0;
  padding: ${Spacing.Medium};
  color: ${Color.White};
  width: 100%;
  font-weight: ${FontWeight.SemiBold};
  font-size: ${FontSize.Medium};
  margin-top: ${Spacing.Medium};

  transition: background-color 0.3s;

  &:hover {
    background: ${Color.Secondary};
  }
`;

export const LoadingStyled = styled(Loading)`
  color: ${Color.White};
`;
