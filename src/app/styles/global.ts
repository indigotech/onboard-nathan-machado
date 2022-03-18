import { createGlobalStyle } from 'styled-components';
import { Color } from './colors';
import { FontFamily, FontSize, FontWeight } from './typography';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${FontFamily.Primary};
    font-size: ${FontSize.Medium};
    font-weight: ${FontWeight.Light};
    background: ${Color.Background};
  }

  h1, h2, h3 {
    font-size: ${FontSize.XXLarge};
    font-weight: ${FontWeight.Regular};
    color: ${Color.TextTitle};
  }

  h4, h5 {
    font-size: ${FontSize.XLarge};
    font-weight: ${FontWeight.Regular};
    color: ${Color.TextTitle};
  }

  h6 {
    font-size: ${FontSize.Large};
    font-weight: ${FontWeight.Light};
    color: ${Color.TextTitle};
  }

  strong {
    font-weight: ${FontWeight.SemiBold};
  }

  button {
    cursor: pointer;
  }

`;
