// src/theme.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      white: string;
      gray: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: number[];
    space: number[];
    radii: number[];
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}