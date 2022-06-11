import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    fontSize: string;
    colors: {
      // General Colors
      background: string;
      dark: string;
      white: string;

      // Pallete Colors
      primary: string;
      secondary: string;
      danger: string;
      success: string;
      warning: string;
      info: string;
      gray: string;
    };
  }
}
